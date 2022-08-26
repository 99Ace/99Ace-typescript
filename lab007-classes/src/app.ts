// === CLASSES ===

// METHOD I : 
class Invoice {
    readonly client:string; // read only 
    private details:string; // this is kept private and we cannot access it outside the class
    public amount:number;   // by default it is public

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `Read Inside Class : ${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'mario website', 888);
const invTwo = new Invoice('luigi', 'luigi website', 555);
console.log( invOne, invTwo)

// state that the array is to store the class type
let invoicesArray : Invoice[] = [];
invoicesArray.push(invOne,invTwo)

invoicesArray.forEach( inv=> {
    // this works when data in class are public
    // console.log(`${inv.client} owes $${inv.amount} for ${inv.details}`)

    // use this instead for private data
    inv.client = "New Name";
    inv.details = "New Details"
    console.log(inv.client, inv.amount, inv.details, inv.format() );
    // client - can read client but not change outside the class
    // details - zero access from outside the class
    // amount - full access to read/write outside the class

})


// METHOD II:
class Invoice2 {
    // this method requires the modifier to be stated else it will not work
    constructor( 
        readonly client : string,
        private details: string,
        public amount : number,
    ){}
    format() {
        return `Read Inside New Class : ${this.client} owes $${this.amount} for ${this.details}`
    }
}

const inv3 = new Invoice2('mario', 'mario website', 888);
const inv4 = new Invoice2('luigi', 'luigi website', 555);
// state that the array is to store the class type
let invoicesArray2 : Invoice2[] = [];
invoicesArray2.push(inv3,inv4)

invoicesArray2.forEach( inv=> {
   
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