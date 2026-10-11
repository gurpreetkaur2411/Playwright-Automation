//Rule of thumb:
// == -> loose equality
// === -> strict equality

// 1. Empty string vs 0 vs "0"

console.log("" == 0); // true, "" is coerced to Number -> 0
console.log("0" == 0); // true, "0" is coerced to Number -> 0
console.log("" == "0"); // false, both strings, compared as is

// transitivity  broken -> coerced

// === fixes it
console.log("" === 0); // false, different types
console.log("0" === 0); // false, different types
console.log("" === "0"); // false, different values



