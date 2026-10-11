//3. Numeric Separators

let million = 1_000_000; // 1 million
let binarySep  = 0b1010_0001;
let hexSep = 0xFF_FF;


//4. BIGINT - For arbitrarily large integers

let big = 12345678901234567890n;
let big2 = BigInt("12345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:",big);
console.log("BigInt from string:",big2);
console.log("BigInt from number:",bigFromNum);  
console.log("typeof BigInt:",typeof big);