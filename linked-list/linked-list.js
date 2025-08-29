class Node {    
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {    
    constructor() {
        this.head = null;
    }

    append(value){
        if (!this.head){
            this.head = new Node(value);
        } else {
            let node = new Node(value);

            let current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
    }

    remove(value){
        if (!this.head) return;
        
        let current = this.head;
        let prev = null;

        if (this.head.value == value){
            this.head = this.head.next;
            return;
        }

        while(current && current.value != value){
            prev = current;
            current = current.next;           
        }

        if (current){
            prev.next = current.next;
        }
    }

    traverse(callback = console.log){
        let current = this.head;
        while(current != null){
            callback(current.value);
            current = current.next;
        }
    }
}