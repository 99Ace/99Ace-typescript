import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let doc1: HasFormatter;  // setup doc1 must have the format
let doc2: HasFormatter;  // setup doc2 must have the format

doc1 = new Invoice('Doc Eggman', 'eggy website', 888);
doc2 = new Payment('Mario', 'eggy website', 888);

let docs: HasFormatter[]=[];    // set up docs array to hold doc in HasFormatter format
docs.push(doc1, doc2)
console.log(docs)


const inv1 = new Invoice('mario', 'mario website', 888);
const inv2 = new Invoice('luigi', 'luigi website', 555);
// state that the array is to store the class type
let invoicesArray : Invoice[] = [];
invoicesArray.push(inv1,inv2)

invoicesArray.forEach( inv=> {
   
    console.log(inv.client, inv.amount, inv.format() );
    
})

















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
    console.log(formData)
})