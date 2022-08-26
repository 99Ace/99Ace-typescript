import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
// list template instance
const ul = document.querySelector('ul'); // add ! to tell ts that ul is not null 
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
// input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Using tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let formData;
    if (type.value == "invoice") {
        formData = new Invoice(...values);
    }
    else {
        formData = new Payment(...values);
    }
    list.render(formData, type.value, 'end');
});
// === TUPLES ===
// Modifying Array works but not for tuples
let arr = ['Ace', 25, true];
arr[0] = false;
arr[1] = 'Ace';
arr = [30, false, "Ace"];
let tup = ['Ace', 25, true]; // position are fixed
// let tup2: [string, number, boolean] = [25,'Ace', true]; // error
// you can change the value but not the type
tup[0] = "Bravo";
// tup[0] = 0              // error
