// *********** Deconstructing *********** //

//*** Regular content: Object, Array
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// Handling Naming Conflict : Naming variables with deconstruction
const password = '12345';
const { password: hashedPassword } = person;
// console.log(hashedPassword)
// output => sekureP@ssw0rd9

//***  Nested content
const person2 = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

//***  Accessing items in nested content ***\\
const { addresses: [whiteHouse, sherlock] } = person2;
// console.log(whiteHouse)
// console.log(sherlock)
// output => two addresses object

//*** Skipping ***\\
// Leaving an 'empty' first position (just a comma) allows skipping that index and destructuring from the second address
const { addresses: [, { city: london }] } = person;
console.log(london);
// => London


// *********** Rest/Spread *********** //

//*** REST

//***** Array *****\\
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
const [firstAnimal, secondAnimal] = animals;

// If we want the remaining animals.
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
otherAnimals
// => ['fish', 'cat', 'bird']

//*** SPREAD

const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]


//***** Objects *****\\

//*** REST

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { firstName, lastName, ...attributes } = person;
firstName
// output => Bob
attributes.createdAt
// output => 1543945177623

// Complete copy of object
const { ...everything } = person;


// *********** Arrow Functions *********** //

function sayHello(name) {
    console.log('Hello ' + name);
};

const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

// Single parameters don't need parenthesis and function body being a single statement we can remove the curly braces.
const sayHello = name => console.log(`Hello ${name}`);

sayHello("lydell")


//**** NO RETURN

// With arrow functions the result of our expressions, n * n, is implicitly returned to the caller. 

var square = function (n) {
    return n * n;
};

const square = n => n * n;

//**** OBJECTS

const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}

// Or

const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });


//***** CONTEXT

// BEFORE

class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
    createCard(suit, face) {
        return this.card = [suit, face]
    }
}

// AFTER

class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                this.deck.push(this.createCard(suit, face));
            });
        });
    }
    createCard(suit, face) {
        return this.card = [suit, face]
    }
}


// *********** Ternary Operator *********** //
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// 1. a condition followed by a question mark (?), 
// 2. then an expression to execute if the condition is truthy followed by a colon (:), 
// 3. and finally the expression to execute if the condition is falsy.

const People = {
    person: [
        {
            "money": 300,
            "food": 50,
            "cloths": 200
        },
        {
            "money": 500,
            "food": 50,
            "cloths": 200
        },
    ] 
}
const { person: [person1, person2] } = People

// IF STATEMENT

if (person1.money < person2.money) {
    console.log("we really rich => " + person2.money)
} else {
    console.log("we really broke")
}

// TERNARY OPERATOR

person1.money < person2.money 
? console.log("we really rich => " + person2.money) 
: console.log("we really broke")
