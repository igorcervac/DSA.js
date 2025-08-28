import DoubleLinkedList from "./double-linked-list.js";

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append(1);
doubleLinkedList.append(2);
doubleLinkedList.append(3);

console.group('Print:');
doubleLinkedList.print();
console.groupEnd();

console.group('Reverse Print:');
doubleLinkedList.reversePrint();
console.groupEnd();

doubleLinkedList.remove(1);
doubleLinkedList.remove(2);
doubleLinkedList.remove(3);

console.group('Print:');
doubleLinkedList.print();
console.groupEnd();

console.group('Reverse Print:');
doubleLinkedList.reversePrint();
console.groupEnd();