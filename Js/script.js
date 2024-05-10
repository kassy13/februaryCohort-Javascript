// Datatypes in javascript
// 2 main Datatypes in js which are the primitive and reference/Object type

// Primitive datatypes
// Numbers
// String
// Boolean
// Undefined
// Null
// Big int
// Symbol

let num = 23;
console.log(num);
let student = "obi";
let greeting = "what's";
let g = false;
let b;
console.log(b);

// LET
// let age = 20;
// console.log(age);
// age = "boy";
// console.log(age);

// CONST
const birthYear = 1900;
console.log(birthYear);

// VAR
var job = "Programmer";
console.log(job);
job = "teacher";
console.log(job);

// Block scope
{
  let age = 20;
  console.log(typeof age);
}
{
  let age = "age";
  console.log(age);
}

//
const numb = "23";
console.log(typeof numb);

const last_name = "f";
const new3 = 33;
let MYname = "somtoo";

// Arithmetic operators
console.log(2 + 4);
console.log(4 - 39);
const year = 2024;
const ageNigeria = year - 1960;
console.log("Nigeria age", ageNigeria);
console.log(year / 10);
console.log(year * 2);

// Modulus
console.log(7 % 2);
console.log(10 % 4);
let x = 10;
console.log(x++);
console.log(x);
console.log(--x);

console.log(x);

// Assignment Operators
let xz = 3;
let y = 4;
xz += y; // xz = xz + y // xz = 3 + 4
console.log(xz); // output is 7
console.log(y); // output is 4
y += xz;
// y = y + xz
console.log(y, xz); // 14 , 7
console.log(y + xz);

// Comparison operators
// Strict equality ===
//loose equality ==
let a = "30";
let c = 30;
console.log(a == c); //true
console.log(a !== c);

console.log(a >= c);

// Operator precedence
console.log(23 - 50 * 3 ** 3);
// -1327

console.log((23 - 50) * 3 ** 3);
-27 * 27;

