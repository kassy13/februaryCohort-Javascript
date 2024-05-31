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
// -27 * 27;

// Solution
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BmiMark = massMark / heightMark ** 2;
const BmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BmiMark > BmiJohn;
console.log(BmiMark, BmiJohn, markHigherBMI);

// STRINGS AND TEMPLATE LITERALS
const myName = "jayjay";
const myJob = "footballer";
const yearOfBirth = 1987;
const okocha =
  "I'm" +
  " " +
  myName +
  "," +
  "a " +
  (2024 - yearOfBirth) +
  "year old" +
  " " +
  myJob;
console.log(okocha);

// Template literals
const okachaNew = ` I am ${myName} , a ${
  2024 - yearOfBirth
} years old ${myJob}`;
console.log(okachaNew);

// Type conversion and type coercion
let inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear);
const newYear = Number(inputYear);
console.log(newYear);
console.log(+inputYear);

let string1 = 1991;
console.log(String(string1));

console.log(Boolean(0));

// COercion
console.log(okocha);
console.log("23" - "10" - 3);
console.log("23" + "10" * 3);
console.log("23" > "18");

let n = "1" + 1; //11
n = n - 1; //10
console.log(2 + 3 + 4 + "5"); //95 string

console.log("10" - "4" - "3" - 2 + "5"); //15 string

console.log(95 - "90" + "4" + 4);

// Logical Operators /Boolean Logic
let age = 16;
console.log(age >= 30);
console.log(age < 30);

// And &&
// OR ||
// NOT !
// 0 = false
// 1 = true

const hasDriversLisence = true;
const hasGoodVison = false;

console.log(hasDriversLisence && hasGoodVison);
console.log(hasDriversLisence || hasGoodVison);
console.log(hasDriversLisence && !hasGoodVison);
console.log((hasDriversLisence && !hasGoodVison) || hasDriversLisence);
console.log(!hasDriversLisence || (!hasGoodVison && hasDriversLisence));
console.log(!hasDriversLisence && !hasGoodVison && !hasDriversLisence);

// TRUTHY AND FALSEY VALUES
// Falsey values are values that are not exactly false but will return false when we try to convert them to boolean in javascript we have 5 falsey values  which are
// 0
// undefined
// null
// NaN (Not a Number)
// "" (empty string)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("0"));

// CONTROL STRUCTURES
// if ( Condition that retrurns a boolean) {
//  code that runs if condition is true
// } else {
// Code for if the condition is false
// }
const drinkingAge = 19;

if (drinkingAge >= 18) {
  console.log("Obi can become a drunkard");
  console.log(2 + 2);
} else {
  console.log("Obi is not of drinking age");
}

const isSunny = false;

let weatherMessage;

if (isSunny) {
  weatherMessage = "Go outside and play";
} else {
  weatherMessage = "It's not a sunny day";
}
console.log(weatherMessage);

// If elseif else statements

const myFavouriteAnimal = "cat";

// if (myFavouriteAnimal === "cat") {
//   console.log("cats are great");
// } else {
//   console.log("I have never heard of that animal");
// }

if (myFavouriteAnimal === "dat") {
  console.log("cats are great");
} else if (myFavouriteAnimal === "dog") {
  console.log("dogs are also great but not my favourite");
} else {
  console.log("I have never heard of that animal");
}

// Assignment 2
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy🏆 ${scoreDolphins}`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas win the trophy🏆 ${scoreKoalas}`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`Both win the trophy🏆 ${scoreKoalas} , ${scoreDolphins}`);
} else {
  console.log("No team won");
}

// SWITCH STATEMENTS
//syntax
//  switch ( variable for comparison){ code to be executed}

const mySecondFavouriteAnnimal = "tortoise";
switch (mySecondFavouriteAnnimal) {
  case "cat":
    {
      console.log("cats are great");
    }
    break;
  case "tortoise":
    {
      console.log("Yay! this is my second best animal");
    }
    break;
  case "dog":
    {
      console.log("dogs are not reallythe best animal");
    }
    break;
  default: {
    console.log("I have Never heard of this animal");
  }
}

// tERNARY Operator
const notSunny = false;
// condition to compare  ? " line of code that will run when this is true" : "line of code that will run when this is false";

notSunny ? console.log("its not a sunny day") : console.log("its a sunny day");
notSunny === false
  ? console.log("its not a sunny day")
  : console.log("its a sunny day");

// FUNCTIONS
// FUnctions are simply a piece of reuseable codes, they are like variables but for storing chunks of codes.

// Types include
// FUnction Declaration
// Function Expression
// Arrow Functions
// Immediately Invoked FUnction Expressions (IIFE)
// Asynchronous FUnctions

// FUnction Declarations
// function NameOfFunction (Parameter){}

function logger() {
  console.log("This is the log function");
  console.log("Hello world its a beautiful day");
}
logger();
// Parameter
greet("amaka");
function greet(name) {
  const greeting = `Hello, ${name} Good Morning !`;
  console.log(greeting);
}
greet("Samuel");
greet("Johnbosco");

// default parameter
function greet2(name = "dear") {
  const greeting = `Hello, ${name} Good Morning !`;
  console.log(greeting);
}
greet2();
greet2("Smitchal");

function calcage(birthYear) {
  const currentYear = 2024;
  console.log(currentYear - birthYear);
}
calcage(2000);
calcage(2001);

function calcage2(birthYear) {
  const currentYear = 2024;
  return currentYear - birthYear;
}
const age3 = calcage2(2021);
console.log(age3);
if (age3 >= 18) {
  console.log("You are an adult");
}

// Function Expression

// const NameOfVariable = function(parameter){}

const okonkwo = function (surname) {
  console.log(`my surname is ${surname}`);
};
okonkwo("okafor");

// Arrow Function
// Syntax const NameOfFunction = ()=>{}
const arrow = (birthyear) => {
  console.log(`I was born in the year:${birthyear}`);
  console.log(this);
};
arrow(2020);

// Anonymous Function
const setTimeoute = function () {
  console.log("Hello from setOut");
};
setTimeoute();

setTimeout(function () {
  console.log("Hello World! coming from javascript set out");
}, 5000);

addEventListener("click", function () {})();

// IIFE
// Syntax (function(parameter){}());
(function (name) {
  console.log(`Hello, ${name}`);
})("obi");
