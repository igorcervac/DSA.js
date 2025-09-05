import BinaryTree from "./binary-tree.js";

const tree = new BinaryTree();
tree.insert(9);
tree.insert(7);
tree.insert(11);
tree.insert(3);
tree.insert(8);

console.group('In-order:');
tree.traverseInOrder();
console.groupEnd();

console.group('Pre-order:');
tree.traversePreOrder();
console.groupEnd();

console.group('Post-order:');
tree.traversePostOrder();
console.groupEnd();

console.group('In-breadth:');
tree.traverseInBreadth();
console.groupEnd();

