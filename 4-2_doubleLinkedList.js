class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublelyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  pop(val) {
    if (!this.head) return undefined;
    let popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;//斷開舊節點的連接
    }
    this.length--;
    return popNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        current++;
      }
      return current
    }else{
      let count = this.length-1;
      let current = this.tail;
      while(count !== index){
        current = current.prev;
        current--;
      }
      return current
    }
  }
  set(index,val){
    this.get(index);
    let foundNode = this.get(index);
    if (foundNode != null) foundNode.val = val;
    return false;
  }
  insert(index,val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    
    let newNode = new Node(val);
    let beforeNode = this.get(index-1);
    let afterNode = beforeNode.next;
    
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true
  }
  remove(index){
    if(index<0 || index >= this.length) return false;
    if(index == 0) return this.shift();
    if(index == this.length-1) return this.pop();

    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;
    beforeNode.next = removedNode.next;
    afterNode.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removeNode;
  }
}

let list = new DoublelyLinkedList();
list.push(5);
list.push(123);
list.push(51);
list.push(58);
list.push(50);