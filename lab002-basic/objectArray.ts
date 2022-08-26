// === ARRAYS ===
let names = ['Ace', 'Bravo', 'Charlie'];
names.push('Delta')
// names.push( 0 )
// uncomment line 3 and note the error when we try to push other data types

// similarly if we have an array of numbers and we try to push a string
let numbers = [1,2,3,4];
numbers.push (5);
// numbers.push("Hello")
// uncomment line 9 and note the error when we try to push other data types

// we are not able to re-assign the data once it is declared
// numbers = ['1','2','3','4']
// uncomment line 14 and note the error when we try to push other data types


// === OBJECTS === 
// - once key type is declared, it also cannot be changed
// - cannot re-assign object or change type
// 
let ninja = {
    name : 'Ace',
    belt : 'black',
    age : 30
}
// can re-assign full set of values
ninja = {
    name : 'Bravo',
    belt : 'red',
    age : 29
}
// cannot missing one existing key
// ninja = {
//     name : 'Charlie',
//     belt : 'blue',
// }
// uncomment line 34-37 and note the error 