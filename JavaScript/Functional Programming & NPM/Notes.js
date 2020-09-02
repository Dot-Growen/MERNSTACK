// When using functional programming, our functions should:
// - be transparent: every time a function is called with the same inputs it should return the same results 
// - be pure: the function should remain "pure" and the values of the parameter passed in are not allowed to be changed... we will be making copies of arrays or objects passed in rather than working "in-place"
// - avoid side effects: the function shouldn't make API calls, write to file-systems or databases, or print to console
// - never be void: our functions have to return a value... if they don't then what they did must have violated one of our previous rules around side-effects, or mutating an input

// *********** Callback Functions *********** \\

var exampleFunction = function (message) {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");


function parentFunction(callback) {
    callback("information from the parent function");
}

parentFunction(exampleFunction);

parentFunction(function (message) {
    console.log(message);
});

// *********** The Big Freeze *********** \\

// Object.freeze()

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

// Spread, Concat, and Slice

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);


// combining thyme and our current list of groceries with the spread operator
const needThyme = [ ...groceryList, {"item": "thyme", "haveIngredient": false}]
// combining thyme and our current list of groceries with concat() method
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

// Add new grocery list and setting thyme "haveIngredients" to true with slice()
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

// Gets the indexes from 0 to 1 and every index after and including 3
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

// Sorting


// THROWS AN ERROR
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort(); // this will throw an error 

// Get around it with the spread operator ;)
const sortedItems = [...items].sort();


const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]

const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );


// *********** Map and Filter *********** \\

//*** (ENTER)MAP

// Map is a function that applies a callback function to each item in an array and returns that new array 
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
// [1, 8, 27, 64, 125]

//*** FILTER

// only even
const values = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );

// If we want only the groceries that have the letter "o" in them we could write...
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

// Chaining Map and Filter
const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

//*** REDUCER

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


// *********** NPM *********** \\

// NPM - Node Package Manager 
// Dependencies - JavaScript files and libraries that give us tools to make applications with
// Find Packages here => https://www.npmjs.com/

// nodemon - automatically re-run your JavaScript file or project whenever you save something
// $ npm install -g nodemon => this installs nodemon globally