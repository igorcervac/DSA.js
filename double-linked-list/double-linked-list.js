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

    remove(value){
        if (!this.head) return;

        if (this.head.value == value){

            if (this.head == this.tail){
                this.tail = this.head = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null;
            }
            
            return;
        }

        if (this.tail.value == value){            
            this.tail = this.tail.prev;
            this.tail.next = null;
            
            return;
        }

        let current = this.head;
        while (current && current.value!=value){
            current = current.next;
        }

        if (current){
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
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