import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payment.js";
let doc1; // setup doc1 must have the format
let doc2; // setup doc2 must have the format
doc1 = new Invoice('Doc Eggman', 'eggy website', 888);
doc2 = new Payment('Mario', 'eggy website', 888);
let docs = []; // set up docs array to hold doc in HasFormatter format
docs.push(doc1, doc2);
console.log(docs);
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
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
    let formData;
    if (type.value == "invoice") {
        formData = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        formData = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(formData);
});
