//  Integer Literals
let decimal = 42; // decimal (base 10) - most common
console.log("Decimal:",decimal);
  
let binary = 0b1010; // binary (base 2) - start with 0b or 0B
console.log("Binary 0b1010:",binary);

let octal = 0o52; // octal (base 8) - start with 0o or 0O
console.log("Octal 0o52:",octal);

let hex = 0x2A; // hexadecimal (base 16) - start with 0x or 0X
console.log("Hexadecimal 0x2A:",hex);


// 2. Floating-point Literals
let float1 = 3.14; // decimal floating-point
let float2 = -0.5;
let float3 = .5; // valid, but avoid for readablity
let float4 = 5.; // valid, but avoid for readablity

console.log("Float 3.14:",float1);
console.log("Float -0.5:",float2);
console.log("Float .5:",float3);
console.log("Float 5.:",float4);

//3. Exponential notation
let exp1 = 1.5e3; // 1.5 * 10^3 = 1500
let exp2 = 2.5e-2; // 2.5 * 10^-2 = 0.025
let exp3 = 2E10; // 2.0 * 10^10 = 20000000000
console.log("Exponential 1.5e3:",exp1);
console.log("Exponential 2.5e-2:",exp2);
console.log("Exponential 2E10:",exp3);  