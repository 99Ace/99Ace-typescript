// === CLASSES ===
export class Payment {
    // this method requires the modifier to be stated else it will not work
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} is owed $${this.amount} for ${this.details}`;
    }
}
