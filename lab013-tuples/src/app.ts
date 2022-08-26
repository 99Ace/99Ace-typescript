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
    
    // Using tuple
    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let formData : HasFormatter;
    if (type.value == "invoice"){
        formData = new Invoice (...values);
    } else {
        formData = new Payment (...values);
    }
    list.render(formData, type.value, 'end');

})



// === TUPLES ===

// Modifying Array works but not for tuples
let arr = ['Ace', 25, true];
arr[0] = false;
arr[1] = 'Ace'
arr =[30, false, "Ace"]  

let tup: [string, number, boolean] = ['Ace', 25, true]; // position are fixed
// let tup2: [string, number, boolean] = [25,'Ace', true]; // error

// you can change the value but not the type
tup[0] = "Bravo";
// tup[0] = 0              // error