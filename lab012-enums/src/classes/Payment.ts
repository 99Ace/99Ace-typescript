import { HasFormatter } from '../interfaces/HasFormatter.js' 

// === CLASSES ===
export class Payment implements HasFormatter {
    // this method requires the modifier to be stated else it will not work
    constructor( 
        readonly recipent : string,
        private details: string,
        public amount : number,
    ){}
    format() {
        return `${this.recipent} is owed $${this.amount} for ${this.details}`
    }
}

