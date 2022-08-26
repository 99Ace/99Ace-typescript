export class ListTemplate {
    // set up the constructor
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        // Setup HTML Elements
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        // Set up the li 
        h4.innerText = heading;
        li.append(h4);
        // Set up the p
        p.innerText = item.format();
        li.append(p);
        if (pos == 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
