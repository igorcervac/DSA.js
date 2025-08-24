import Stack from "./stack.js";

console.group('push')
let stack = new Stack();
stack.push(100);
stack.print();
console.groupEnd();

console.group('peek')
console.log(stack.peek(100));
stack.print();
console.groupEnd();

console.group('pop')
console.log(stack.pop());
stack.print();
console.groupEnd();