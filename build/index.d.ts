declare type Invariant = (cond: unknown, message: string, strategy?: Strategy) => asserts cond;
declare type Strategy = "log" | "warn" | "error" | "throw";
export declare const assertString: (str: string) => void;
export declare const assertInt: (n: number) => void;
export declare const invariant: Invariant;
export declare const assert: Invariant;
export {};
