// This is a comment
// This is another comment.

/*
What?
It looks like a CSS comment!
Yasss.
*/

// Variables! (Storing single pieces of info.)
// turkey_legs_consumed = 3
var turkeyLegsConsumed = 3;
// 1. Prefix your variables the first time you use them.
// 2. Use camelCase!
// 3. Terminate each line with `;`

// `var` was the original way to declare variables.
// `let` is better because:
// It gives you more control. (You can limit its use to a specific if/else or a specific loop.)
let turkeysCooked = 2;

// `const` is like `let`, but:
// - You must assign it when you declare it.
// - You can never reassign it.
const numberOfTurkeysICanEat = 1;

// How to use these keywords:
// 1. By default, create your variables using `const`
// 2. If you find out that you need to reassign it, change it to `let`.

// print("Hello World!")
console.log("Hello World!");
console.log('Hello World!');
console.log(`Hello World! ${turkeyLegsConsumed}`);

// print(turkeysCooked)
console.log(turkeysCooked);

// print(f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);
// You can use backtick-strings for interpolation.
// - Template Strings
// - Template Literals

// print(f"How many turkeys I should eat {numberOfTurkeysICanEat - turkeysCooked}!")
console.log(`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);
// Inside of `${}`, you can put any valid JavaScript expression.
// debugger;
let petName = `Oakley`;
// petName.toUpperCase();
// When do I do upper-casing in
// HTML vs CSS vs JavaScript?
// - Where ever you have control.
// - If it won't change for a looong time: HTML
// - If you can't change the HTML: CSS
// - If you get the data from a server: JavaScript
console.log(`${petName.toUpperCase()} is ${petName.length} characters long.`);
// .toUpperCase is a method (i.e., a function that belongs to an object)
// .length is property (i.e., a variable that belongs to an object)

const aboutMyPet = `${petName.toUpperCase()} is ${petName.length} characters long.`;
console.log(aboutMyPet);

petName = "Millllllllla";
console.log(aboutMyPet);

// Stuff we'll do with collections:
// Create
const turkeyDinner = ["sausage balls", "turkey", "dressing", "pecan pie"];
// How do I copy a list?

// Retrieve
// print(turkeyDinner[2])
console.log(turkeyDinner[2]);
// How do I retrieve a portion? ("slice" in python)
// How do I retrieve based on a condition?
// How do I transform each item and put that into a new list?

// Update
// turkeyDinner[1] = "Tofurkey"
turkeyDinner[1] = "Tofurkey";

// Delete
// In python:
// turkeyDinner.pop(1) 
// del turkeyDinner[1]
// .........
// You can do this in JavaScript:
// delete turkeyDinner[1];
// But! This leaves a hole!!!
// Instead, you can splice
// turkeyDinner.splice(1, 1)

// In python, we do this:
// for item in turkeyDinner:
//   print(f"For Turkey Day, I ate {item}")

// In JavaScript
// 1. "classic" for-loop (is the equivalent of python while loop)
// BTW, the equivalent of count += 1 is count++
for (let count = 0; count < turkeyDinner.length; count += 1) {
    // console.log(count);
    console.log(`I ate ${turkeyDinner[count]}`);
}
// console.log(`I ate ${turkeyDinner[0]}`);
// console.log(`I ate ${turkeyDinner[1]}`);
// console.log(`I ate ${turkeyDinner[2]}`);
// console.log(`I ate ${turkeyDinner[3]}`);

// 2. "new fangled" for-of-loop
let itemCount = 0; // If you *really* need the index...
for (let item of turkeyDinner) {    
    console.log(`I ate ${item}`);
    turkeyDinner[itemCount] = "PIE";
    // itemCount += 1;
    itemCount++;
}

// 3. (for tomorrow) .forEach and friends


// Converting Numbers to/from Strings
// a_num = "5"
// no_really_a_number = int(a_num)
const aNum = "5";
// const reallyANumber = Number(aNum);
const reallyANumber = parseInt(aNum, 10);
// Passing parseInt a decimal number
// results in the decimal portion being
// thrown away.
// parseInt("3.14", 10)

const reallyAFloat = parseFloat("3.14");

// the_original_string = str(no_really_a_number)
const theStringFive = String(reallyANumber);
const theString314 = String(reallyAFloat);

// Comparison

// In Python, this is false:
// "5" == 5

// In JavaScript, the == operator
// AUTOMATICALLY converts types.

// In JavaScript, use the "threequal"
"5" === 5
// `===` is the strict equality operator
// it does a double comparison.
// 1. it compares the types
// 2. then, it compares the values

// These are the same in python
// and in JavaScript
5 < 6 // true
6 < 6 // false
6 <= 6 // true
7 > 6 // true
7 > 7 // false
7 >= 7 // true

// The following is not a thing
// in JavaScript:
// "7" >== 7
// You get an error :(


// and/or equivalents
const petAge = 9;

// python's and
// petAge < 10 and petAge > 5

// JavaScript
petAge < 10 && petAge > 5 

// python's or
// petAge < 10 or petAge > 5

// In JavaScript:
petAge < 10 || petAge > 5

// Too much!
petAge < 10 && petAge > 5 || petAge === 8
const isYoungEnough = petAge < 10;
const isOldEnough = petAge > 5;
const isJustRight = petAge === 8;
const isMoreJustRight = petAge === 9;

// if () {}

// if/else
if (isYoungEnough && isOldEnough) {
    if (isJustRight) {
        console.log(`You are exactly the right age.`);
    } else if(isMoreJustRight) {
        console.log(`Wow. That's the best`);
    } else {
        console.log(`You're cool anyway.`)
    }
}

// 1. Create an array of numbers
// 2. Loop through the array.
// 3. Print out only the even numbers.

const someNumbers = [12, 35, 87, 100, 500, 2, -4, 75849];
// The `in` keyword would give you the indexes.
// For other kinds of collections, the `in` keyword
// can give you "metadata".
for (let number of someNumbers) {
    if (number % 2 === 0) {
        console.log(`Here is a number: ${number}`);
        // console.log(number);
    }
}

// I want the even numbers in their own array.
// - where are the numbers now?
// - where do I want to put them?
const evensOnly = [];
// - How do I put them in the new array?

for (let number of someNumbers) {
    if (number % 2 === 0) {
        // In Python, it's evensOnly.append(number)
        evensOnly.push(number);
    }
}
console.log(evensOnly);

// JS doesn't care if you mix and match.
// But, there's not a good use for a mixed up array.
const aBunchOfStuff = ["a", 1, "hello", 300];
for (let thing of aBunchOfStuff) {
    console.log(thing);
}

// Python:
// num = 8123456
// (num % 2) == 0
// JS:
// const num = 8123456;
// (num % 2) === 0


// Maybe, probably, definitely
// Functions

// def add(num1, num2):
//     sum = num1 + num2
//     return sum

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

add(2, 2);
const result = add(add(2, 2), 3);
console.log(result);

for (let i = 0; i<10; i++) {
    console.log('*');
}