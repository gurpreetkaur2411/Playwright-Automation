
let validName = "starts with letter"; 
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";


let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";
// let 1stItem = "invalid"; // SyntaxError: Invalid or unexpected token 
// let Function = "invalid"; but it actually works as Function is a built in name, not a reserved word
let MyVar = "uppercase M";
let myvar = "lowercase v";
 

//EXAMPLES OF VALID IDENTIFIERS//

let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A";
let \u005f = "Unicode escape for _";

// let my-name = "invalid";
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'


// 1. camelCase (standard for JS variables and functions)
let userName = "gurpreetKaur";
let totalPrice = 349.42;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "GurpreetKaur";
let ShoppingCart = "d mart";
function Person() { return "constructor"; }

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 2800;
const API_KEY = "test123";
