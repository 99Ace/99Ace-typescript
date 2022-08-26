// === EXPLICIT TYPES ===
let username2 : string;
let age2 : number;
let tracker : boolean;

// === ARRAYS ===
// declare an array that contains string but fruits is not defined yet
let fruits : string[];
// fruits.push("apple")
// uncomment line 9 and you will see "fruits is not defined" in the browser console

// declare an array that contains numbers and it is an empty array 
let numbers : number[] = [];
numbers.push( 8 )
// this works

// === UNION TYPES === 
let mixed: (string|number)[]=[];
mixed.push("hello");
mixed.push(20);
mixed.push(false); // error

let mixed2: (string|number|boolean)[]=[];
mixed2.push("hello");
mixed2.push(20);
mixed2.push(false); // no error

// declare uid to be string or number but not boolean
let uid: string|number;

// === OBJECTS ===
// METHOD I : declare an object but open for keys
let ninjaOne: object;
ninjaOne = {
    name : 'Ace',
    age : 30
}

// METHOD II : specify keys types
let ninjaTwo : {
    name : string,
    age : number,
    belt : string
}

// This works
ninjaTwo = {
    name : 'Ace',
    age : 30,
    belt : "black"
}

// This gives error as missing belt key
ninjaTwo = {
    name : 'Ace',
    age : 30,
}


// === DYNAMIC : ANY TYPE ===
// Any variable
let age : any = 25;
age = true;
age = "Hello";
age = [];
age = {};

// Any Array
let mixType : any[] = [];

// Any Object
let anyObject : {
    name : any,
    age : any
}

anyObject = {
    name : 'Ace',
    age : 30,
    belt: ""  // Error as we try to add new key
}