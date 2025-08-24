import Queue from "./queue.js";
var queue = new Queue();

console.group('Enqueue:');
queue.enqueue(10);
queue.print();
console.groupEnd();

console.group('Peek:');
queue.peek(10);
queue.print();
console.groupEnd();

console.group('Dequeue:');
console.log(queue.dequeue());
queue.print();
console.groupEnd();