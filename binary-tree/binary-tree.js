class Node {    
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;        
    }
}

export default class BinaryTree {
   
    constructor() {
        this.root = null;
    }

    insert(value){
        const node = new Node(value);
        if (!this.root){
            this.root = node;
            return;
        }

        let current = this.root;
        while(true){
            if (value < current.value){
                if (!current.left){
                    current.left = node;
                    return;
                }
                current = current.left;
            }
            else {
                if (!current.right){
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    traverseInOrder(node = this.root){
        if (node){
            this.traverseInOrder(node.left);
            console.log(node.value);
            this.traverseInOrder(node.right);
        }
    }

    traversePreOrder(node = this.root){
        if (node){
            console.log(node.value);
            this.traverseInOrder(node.left);
            this.traverseInOrder(node.right);
        }
    }

    traversePostOrder(node = this.root){
        if (node){
            this.traverseInOrder(node.left);
            this.traverseInOrder(node.right);
            console.log(node.value);
        }
    }
}