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