// === INTERFACES ===
interface IsPerson {
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):number;
}

// const me: IsPerson = {}; // <= uncomment:  error 

const me: IsPerson = {
    name : "Ace",
    age : 30,
    speak(text:string):void {
        console.log(text)
    },
    spend(amount:number):number {
        return amount;
    },
}

// using the interface
const greetPerson = (person: IsPerson)=> {
    console.log("Hello ", person.name)
    console.log( person.speak("Welcome!") )
}
greetPerson(me)

import { Invoice } from "./classes/Invoices.js";

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
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})