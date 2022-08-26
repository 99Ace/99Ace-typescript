// === CLASSES ===
export class Invoice {
    // this method requires the modifier to be stated else it will not work
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `Read Inside New Class : ${this.client} owes $${this.amount} for ${this.details}`;
    }
}
