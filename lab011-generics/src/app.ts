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

// === GENERICS ===
const addUID = (obj:object)=> {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid }
}

let doc1 = addUID( {name:'Ace', age: 40} );

console.log(doc1);  // this works

// console.log(doc1.name); // error cos when we pass the object at line 40, we did not specify
                        // hence they do not know what exist in the object

// To solve, we use generics

// const addUID2 = <T>(obj:T)=> {          // <= this works but does not specify T is an object
                                           // hence you can pass in anything
// const addUID2 = <T extends object>(obj:T)=> {    // <=== this specify this is an objects

const addUID2 = <T extends {name:string}>(obj:T)=> {  // or you can be even more specified 
                                                      // require a name

        let uid = Math.floor(Math.random() * 100);
    return {...obj, uid }
}
let doc2 = addUID2( {name:'Ace', age: 40} );

console.log(doc2.name) // now this works


// with interface
interface Resource<T> {
    uid: number;                // must have a uid which is a number 
    resourceName : string;      // must have a resourceName which is a string
    data : T;                   // data must be present but flexible, so it takes in T 
                                // which is what is passed in
}

const doc3 : Resource<object> = {
    uid : 1,
    resourceName : 'person',
    data: {name: "Ace"}
}

const doc4 : Resource<string[]> = {
    uid : 1,
    resourceName : 'person',
    // data: ["apple", "orange", 1]         // error
    data: ["apple", "orange", "cherry"]     // this works
}