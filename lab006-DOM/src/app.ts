// === ACCESSING THE DOM === 

// how we normally write in JS
const anchor = document.querySelector('a');
// console.log(anchor.href)  // <=uncomment : in TS we gets an error


// to counter that, we place a !
const anchorTS = document.querySelector('a')!; // tells TS we have value here
console.log(anchorTS.href)  // no error



// .class can refer to any type of DOM element, hence we need to set it
const form = document.querySelector('.new-item-form') as HTMLFormElement; 
console.log(form.children);

// get the input fields
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