"use strict";
// === ACCESSING THE DOM === 
// how we normally write in JS
const anchor = document.querySelector('a');
// console.log(anchor.href)  // <=uncomment : in TS we gets an error
// to counter that, we place a !
const anchorTS = document.querySelector('a'); // tells TS we have value here
console.log(anchorTS.href); // no error
// .class can refer to any type of DOM element, hence we need to set it
const form = document.querySelector('.new-item-form');
console.log(form.children);
// get the input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
