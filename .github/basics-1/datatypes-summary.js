//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n
console.log(bigNumber);




// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "aryaman"];
let myObj = {
    name: "Amol",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    return myFunction;
}

//console.log(myFunction)

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3