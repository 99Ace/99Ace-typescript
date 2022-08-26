// === CLASSES ===
export class Invoice {
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

