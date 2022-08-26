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
    list.render(formData, type.value, 'end');
});
