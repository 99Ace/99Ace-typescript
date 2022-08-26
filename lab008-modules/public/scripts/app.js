import { Invoice } from "./classes/Invoices.js";
const inv1 = new Invoice('mario', 'mario website', 888);
const inv2 = new Invoice('luigi', 'luigi website', 555);
// state that the array is to store the class type
let invoicesArray = [];
invoicesArray.push(inv1, inv2);
invoicesArray.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
// input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
