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
console.log(tips)
const totals = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals)
