import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// list template instance
const ul = document.querySelector('ul')!; // add ! to tell ts that ul is not null 
const list = new ListTemplate(ul);


const form = document.querySelector('.new-item-form') as HTMLFormElement; 

// input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.valueAsNumber
    // )
    let formData : HasFormatter;
    if (type.value == "invoice"){
        formData = new Invoice (tofrom.value, details.value, amount.valueAsNumber);
    } else {
        formData = new Payment (tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(formData, type.value, 'end');
})