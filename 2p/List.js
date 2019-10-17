class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}
class List {
    constructor() { //2 nodos: Inicial y final
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertHead(data) {
        if (this.head === null) {
            return this.head = new Node(data);
        }
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insertTail(data) {
        if (this.head == null) {
            this.tail = new Node(data);
            this.head = this.tail;
            this.length++;
        } else {
            this.tail.next = new Node(data);
            this.tail = this.tail.next;
            this.length++;
        }
    }
    deleteHead() { 
        this.head.next = this.head.next.next;
        this.length--;
    }
    deleteTail() { 
        let current = this.head;
        do{
            if(current.next.next.next === null){
                current.next = this.tail;
                break;
            }
            current = current.next;
        } while(current.next.next != null);
        this.length--;
    }
    size() {
        return this.length;
    }
    toString() {
        let x = this.head;
        while (x != null) {
            console.log(x);
            x = x.next;
        }
    }
}

let list1 = new List();
list1.insertTail(1);
list1.insertTail(2);
list1.insertTail(3);
list1.insertHead(0);
console.log(list1.size());
console.log(list1.toString());
list1.deleteHead();
console.log(list1.toString());
console.log(list1.size());
list1.insertTail(4);
list1.deleteTail();
console.log(list1.toString());
console.log(list1.size());

