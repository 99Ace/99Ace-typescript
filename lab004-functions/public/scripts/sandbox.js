"use strict";
// === FUNCTIONS === 
let greet;
greet = () => {
    console.log("This works");
};
// set up parameters
const add = (a, b) => {
    console.log(a + b);
};
// optional parameter
const minus = (a, b, c) => {
    console.log(a - b);
};
// assign default value to parameter
const divide = (a, b, c = 10) => {
    console.log(a / b);
};
// return value
const mod1 = (a, b) => {
    return a % b; // auto return a number
};
const modNum = (a, b) => {
    return (a % b).toString();
};
const mod3 = (a, b) => {
    console.log(a % b);
};
