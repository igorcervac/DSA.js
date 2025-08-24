import Stack from "./stack.js";
let stack = new Stack();

console.group('push')
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