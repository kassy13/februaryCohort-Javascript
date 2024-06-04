"use strict";

// let isTired = false;
// const shouldStudy = true;
// if (shouldStudy) isTird = true;
// if (isTired) console.log("I shouldnt be studying");

// ARRAYs
// Syntax const nameOfVariable = []
// syntax = new Array()

// const years = new Array(1989, 57548, 8958);
// console.log(years);
const friends = [
  "john-bosco",
  "Harrison",
  "Valentine",
  "Desire",
  1000,
  true,
  "ghgjdj",
];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);
console.log(friends.length - 1);
// console.log(friends[5]);

friends[0] = "Akachukwu";
console.log(friends);

const meMyselfAndI = ["somtoo", "obi", 20024 - 1970, "instructor", friends];
console.log(meMyselfAndI);
console.log(meMyselfAndI[4][2]);

// SOLUTION
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// BASIC ARRAY METHODS
// Push : Adds an element or value to the end of an array
friends.push("Ada");
console.log(friends);
// Unshift: Adds a value at the beginning of the array

friends.unshift("john");
console.log(friends);

// Pop : Removes the last element from an array and returns it
friends.pop();
console.log(friends);

// Shift:removes the first value from an array
friends.shift();
console.log(friends);

// IndexOf: used to get the index at which a value is located in array
console.log(friends.indexOf("Valentine"));

console.log(friends.includes("Akachukwu"));

// OBJECTS
// Syntax const nameOfObject = {}

const StudentObject = {
  firstName: "samuel",
  lastName: "mbugua",
  age: 2024 - 1980,
  job: "Student",
  friends: friends,
};
console.log(StudentObject.age);
console.log(StudentObject.friends);

console.log(StudentObject["firstName"]);

const nameKey = "Name";
console.log(StudentObject["firsts" + nameKey]);

console.log(
  `I am ${StudentObject.firstName} ${StudentObject.lastName}, a ${StudentObject.age} year old ${StudentObject.job} and my best friend is ${StudentObject.friends[6]}`
);
~