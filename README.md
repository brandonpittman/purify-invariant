# purify-invariant

This is a semi-clone of tiny-invariant. It is meant to be used alongside
purify-ts. The condition assert uses Purify's `Maybe.fromFalsy`. This could be
seen as total overkill, but it leaves room to add interesting stuff in the
future.

What is fun about this package now, is that you can pass a `strategy` param to
the `invariant` function of `"throw" | "log" | "warn" | "error"`. `throw` is
the default but if you just want to use `console.${strategy}`, it's easy to
switch up.

## Install

```sh
npm install purify-invariant
```

## Uncurried Example

```ts
import { invariant } from "purify-invariant"

// Unlike tiny-invariant, the error message is required.
invariant(1 > 2); // will throw an error

// Okay
invariant(1 > 2, "Condition check failed");

invariant(1 > 2, "Condition check failed", "warn");
```

## Curried Example

```ts
import { invariantCurried } from "purify-invariant"

let oops = invariantCurried("throw")
let ohNo = oops("Oh no!")
ohNo(1 > 2) // throw new Error("Oh now!")
```
