// === TYPE ALIASES ===
type StringOrNum = string | number;
type objWithName = {name:string, uid: StringOrNum} // use the StringOrNum declared above

const logDetails = (uid: StringOrNum, item : String)=>{
    console.log(`${item} has a uid of ${encodeURIComponent}`)
}

const welcome =( user: objWithName ) => {
    console.log(`${user.name} has a uid of ${user.uid}`)
}


// === FUNCTION SIGNATURES ===

// example 1
let greet: (a:string, b:string)=> void;
greet =(name:string , greeting)=>{   // parameters have to follow what was define in line 17 
    console.log(`${name} says ${greeting}`)
} // returns void automatically

// example 2
let calc: (a:number, b:number, c:string)=> number;

calc =(numOne, numTwo:number, action:string)=>{
    if (action=="add"){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example3
let data : (obj: {name:string, age:number})=> void;
data = (ninja: {name:string, age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}

// or
let data2 : (obj: {name:string, age:number})=> void;
type stats = {name: string, age:number}
data2 = (ninja: stats )=>{
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
