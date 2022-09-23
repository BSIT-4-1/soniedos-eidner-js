// console.log("Hello World!");
// console.error()
// console.table()
// console.warn()
// console.time()
// console.timeEnd()

// Variable declaration
// string, number, boolean, object, function
let name = "Aaron Eidner"; // string
let age = 23; // number
let isSingle = false; // boolean
let hobbies = ["Travel", `playing online games`, "Sports"];
let jsonObject = { name, age, isSingle, hobbies };
let run = function () {
  console.log(name + " is running.");
};

console.log(
  "My name is " + name,
  "My age is " + age,
  "Am I taken? " + isSingle,
  "My hobbies are " + hobbies,
  run
);

console.log(jsonObject);
console.log("\n")

// let _let = "something";
// let _function = "something";

// console.log(typeof name);

// If else statement...
// >, <, !, ==, >=, <=, ||, &&, === // Condition operator
// + - * / % // Math operands
// if (age === "25") console.log(`${age} == ${25}`);
// else console.log(`${age} != ${25}`);

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 ++ = unemployed

// if (age >= 22) console.log("Im unemployed.");
// else if (age >= 19 && age <= 21) console.log("College na");
// else console.log("Bata pa");

// TODO: Refactor the if else statement above to a switch statement.
switch (true) {
  case age >= 22:
    console.log("I'm unemployed.");
    break;
  case age >= 19:
    console.log('My age is: ' + age)
    console.log("I'm a college student.");
    break;
  case age >= 1:
    console.log("I am young!");
    break;
  default:
    console.log('Something went wrong.');
}

console.log('\n')

// let a = 0;
// // Loops
// while (a < 10) {
//   console.log("*");
//   a++;
//   if (a == 5) break;
// }

// for (let b = 0; b <= 10; b++) {
//   console.log("x".repeat(b));
//   if (b == 5) break;
// }

// TODO:
/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/

// hobbies.forEach((hobby, i) => {
//   if (i >= 1) return;
//   console.log(hobby, i);
// });

// // Requiring / Importing other js files.
// const _functions = require("./functions.js");
// _functions.consoleMessage("Log this message.");

function createDiamond (numberOfAsterisks){
    // If <numberOfAsterisks> is an odd number, add +1, to make it an even number.
    console.log("---------------------")
    console.log('Number of lines: ' + numberOfAsterisks)
    let a = numberOfAsterisks + 1
    console.log('\n')
    if(numberOfAsterisks % 2 == 1){
        console.log("Odd numbers must be converted into even numbers: " + '\n' +
        numberOfAsterisks + " + 1 " + "= " + a + "\n"+ a + " : New Line Count")
        console.log('\n')
    }
    //Loop to create diamond using <numberOfAsterisks>.

    let x = a;
    let spaces_star = "";
    // Up
    for (let lines = 1; lines <= x; lines++) { // lines = 1, lines less than or = to x: true, lines(1) + lines++(1) = 2
      //spaces
      for (let y = x; y > lines; y--) { // y = x(6), y is greater than lines(1), y(6) - 1 = 5 spaces
        spaces_star += " ";
      }
      //star
      for (let star = 0; star < lines * 2 - 1; star++) { // star = 0; star less than (lines(1)*2 -1 = 1), add a star - *
        spaces_star += "*";
      }
      spaces_star += "\n";
    }
    // down
    for (let lines = 1; lines <= x - 1; lines++) { // lines = 1, lines(1) less than or = x(6)-1=5, lines =2
      //spaces_star
      for (let y = 0; y < lines; y++) { // y =0, y is less than lines(1), y=0 : spaces = 0 , next ++
        spaces_star += " ";
      }
      //star
      for (let star = (x - lines) * 2 - 1; star > 0; star--) {// star = (6-lines(1) = 5*2 = 10 -1 = 9), star is greater than zero: true, star -- (6-lines(2))
        spaces_star += "*";
      }
      spaces_star += "\n";
    }
    console.log(spaces_star);
    
}

createDiamond(5)