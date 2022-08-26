"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${encodeURIComponent}`);
};
const welcome = (user) => {
    console.log(`${user.name} has a uid of ${user.uid}`);
};
// === FUNCTION SIGNATURES ===
// example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
}; // returns void automatically
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example3
let data;
data = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
// or
let data2;
data2 = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
