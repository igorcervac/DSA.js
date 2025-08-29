import LinkedList from "./linked-list.js";

let linkedList = new LinkedList();

console.group('Append:');
linkedList.append(1);
linkedList.append(2);
linkedList.traverse();
console.groupEnd();

console.group('Remove:');
linkedList.remove(2);
linkedList.remove(1);
console.groupEnd();
