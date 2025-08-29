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

    traverseInOrder(node = this.root, callback = console.log){
        if (node){
            this.traverseInOrder(node.left, callback);
            callback(node.value);
            this.traverseInOrder(node.right, callback);
        }
    }

    traversePreOrder(node = this.root, callback = console.log){
        if (node){
            callback(node.value);
            this.traversePreOrder(node.left, callback);
            this.traversePreOrder(node.right, callback);
        }
    }

    traversePostOrder(node = this.root, callback = console.log){
        if (node){
            this.traversePostOrder(node.left, callback);
            this.traversePostOrder(node.right, callback);
            callback(node.value);
        }
    }
}