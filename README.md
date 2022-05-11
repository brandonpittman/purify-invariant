# purify-invariant

## Install

```sh
npm install purify-invariant
```

This is a semi-clone of tiny-invariant. It is meant to be used alongside purify-ts. The condition assert uses Purify's `Maybe.fromFalsy`. This could be seen as total overkill, but it leaves room to add interesting stuff in the future.

What is fun about this package now, is that you can pass a `strategy` param to the `invariant` function of `"throw" | "log" | "warn" | "error"`. `throw` is the default but if you just want to use `console.${strategy}`, it's easy to switch up.

## Example

```ts
// Unlike tiny-invariant, the error message is required.
invariant(1 > 2); // will throw an error

// Okay
invariant(1 > 2, "Condition check failed");

invariant(1 > 2, "Condition check failed", "warn");
```
