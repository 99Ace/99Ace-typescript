// === EXPLICIT TYPES ===
var username2;
var age2;
var tracker;
// === ARRAYS ===
// declare an array that contains string but fruits is not defined yet
var fruits;
// fruits.push("apple")
// uncomment line 9 and you will see "fruits is not defined" in the browser console
// declare an array that contains numbers and it is an empty array 
var numbers = [];
numbers.push(8);
// this works
// === UNION TYPES === 
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false); // error
var mixed2 = [];
mixed2.push("hello");
mixed2.push(20);
mixed2.push(false); // no error
// declare uid to be string or number but not boolean
var uid;
// === OBJECTS ===
// METHOD I : declare an object but open for keys
var ninjaOne;
ninjaOne = {
    name: 'Ace',
    age: 30
};
// METHOD II : specify keys types
var ninjaTwo;
// This works
ninjaTwo = {
    name: 'Ace',
    age: 30,
    belt: "black"
};
// This gives error as missing belt key
ninjaTwo = {
    name: 'Ace',
    age: 30
};
// === DYNAMIC : ANY TYPE ===
// Any variable
var age = 25;
age = true;
age = "Hello";
age = [];
age = {};
// Any Array
var mixType = [];
// Any Object
var anyObject;
anyObject = {
    name: 'Ace',
    age: 30,
    belt: "" // Error as we try to add new key
};
