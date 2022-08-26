// DATA TYPES - hover over the variable name and see the type
var username = "this is a string type";
var age = 30;
var height = 1.78;
var tracker2 = true;
// or we can declare it this way
var username2;
var age2;
var tracker;
// note we cannnot re-assign a different data type once declared
// age = "Ace"    
// uncomment line 13 and note the error line under the age when we try to re-assign the type
// FUNCTIONS
var circle = function (r) {
    return 3.14 * r * r;
};
// note when we pass in a string, the result will be NaN in the console
console.log(circle("Hello"));
// we can specify the type the function expecting
var circle2 = function (r) {
    return 3.14 * r * r;
};
// console.log( circle2 ( "Hello" ))
// uncomment line 30 and note the error linewhen we try to pass a wrong data type
