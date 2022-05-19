import { identity, curry } from "purify-ts/Function.js";
import { Maybe } from "purify-ts/Maybe.js";
type Invariant = (
  cond: unknown,
  message: string,
  strategy?: Strategy
) => asserts cond;
type InvariantCurried = (
  strategy: Strategy,
  message: string,
  cond: unknown
) => asserts cond;
type Strategy = "log" | "warn" | "error" | "throw";

export const assertString = (str: string) => {
  if (typeof str !== "string") {
    throw new TypeError("assertString argument is not a string.");
  }
};

export const assertInt = (n: number) => {
  if (!Number.isInteger(n)) {
    throw new TypeError("assertInt argument is not an integer.");
  }
};

export const invariant: Invariant = (cond, message, strategy = "throw") => {
  assertString(message);

  return Maybe.fromFalsy(cond).caseOf({
    Nothing: () => {
      switch (strategy) {
        case "log":
          return console.log(message);
        case "warn":
          return console.warn(message);
        case "error":
          return console.error(message);
        default:
          throw new Error(message);
      }
    },
    Just: identity,
  });
};

export const assert = invariant;

const invariantUncurried: InvariantCurried = (strategy, message, cond) => {
  assertString(message);

  return Maybe.fromFalsy(cond).caseOf({
    Nothing: () => {
      switch (strategy) {
        case "log":
          return console.log(message);
        case "warn":
          return console.warn(message);
        case "error":
          return console.error(message);
        default:
          throw new Error(message);
      }
    },
    Just: identity,
  });
};

export const invariantCurried = curry(invariantUncurried);
