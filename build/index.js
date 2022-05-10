"use strict";
exports.__esModule = true;
exports.assert = exports.invariant = exports.assertInt = exports.assertString = void 0;
var Function_1 = require("purify-ts/Function");
var Maybe_1 = require("purify-ts/Maybe");
var assertString = function (str) {
    if (typeof str !== "string") {
        throw new TypeError("assertString argument is not a string.");
    }
};
exports.assertString = assertString;
var assertInt = function (n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("assertInt argument is not an integer.");
    }
};
exports.assertInt = assertInt;
var invariant = function (cond, message, strategy) {
    if (strategy === void 0) { strategy = "throw"; }
    (0, exports.assertString)(message);
    return Maybe_1.Maybe.fromFalsy(cond).caseOf({
        Nothing: function () {
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
        Just: Function_1.identity
    });
};
exports.invariant = invariant;
exports.assert = exports.invariant;
