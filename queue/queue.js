export default class Queue {   
    
    constructor() {
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    peek(){
        return !this.empty() ? this.items[0] : null;
    }

    dequeue(){
        const value = this.items.shift();
        return value;
    }

    empty(){
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log('Queue:', this.items);
        console.log('Size:', this.size());
        console.log('Empty:', this.empty());
    }
}