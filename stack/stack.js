export default class Stack {
    
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop(){
        let value = this.items.pop();
        return value;
    }

    peek(){
        return this.items[this.items.length-1];
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log('stack:', this.items);
    }
} 