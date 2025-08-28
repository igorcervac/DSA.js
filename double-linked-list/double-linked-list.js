class Node {    
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class DoubleLinkedList{
    
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    remove(value) {
        if (!this.head) {
            return null;
        }

        let current = this.head;

        if (current.value === value) {
            this.head = current.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }

            return current;
        }

        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }

            if (current.prev) {
                current.prev.next = current.next;
            }
        }

        return current;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    reversePrint(){
        let current = this.tail;
        while(current){
            console.log(current.value);
            current = current.prev;
        }
    }
}