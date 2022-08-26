// === FUNCTIONS === 

let greet : Function;
greet = () => {
    console.log("This works")
}

// set up parameters
const add =(a:number, b:number)=> {
    console.log(a+b);
}

// optional parameter
const minus =(a:number, b:number, c?:number|string)=> {
    console.log(a-b);
}
// assign default value to parameter
const divide =(a:number, b:number, c:number|string = 10)=> {
    console.log(a/b);
}

// return value
const mod1 =(a:number, b:number)=>{
    return a%b; // auto return a number
}
const modNum =(a:number, b:number):string=>{  // define return as string
    return (a % b).toString(); 
}
const mod3 =(a:number,b:number)=>{  // auto as void when no return, hover over the mod3 to view
    console.log(a%b)
}
