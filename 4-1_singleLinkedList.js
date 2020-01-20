
//piece of data-val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {//預設值設定
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){//新增結點
    let newNode = new Node(val);
    if (!this.head) {//無節點時，設頭尾皆為新節點
      this.head = newNode;
      this.tail = newNode;
    }else {//有節點時,原資料最後一個節點指向新節點並令尾節點為新節點
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){//刪除最後節點
    if (!this.head) return undefined;//沒資料情況
    let current = this.head;
    let newTail = current;
    while (current.next) {//有下一項元素時,移動尾巴並將current繼續往下一個元素移動
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;//設置新的尾元素並令其為null
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {//若資料為空時，設定頭尾為null
      this.head = null;
      this.tail = null;
    }
    return current //返回被刪除的元素
  }
  shift(){//刪除第一個節點,將頭命名為當前頭的下一節點
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val){//新增第一節點
    let newNode = new Node(val);
    if(!this.head){//資料為空,設置頭尾皆為新元素
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){//取得節點
    //超出邊界返回null
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {//不等於就繼續往下查找
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index,val){//設置任一節點的值
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true
    }
    return false;
  }
  insert(index, val){//將節點插入任一處
    if(index < 0 || index > this.length) return false;//節點不能比0小或比長度還大
    if (index === this.length) return this.push(val);//插入最後面
    if(index ===0) return this.unshift(val);//插入最前面

    const newNode = new Node(val);
    //找到前一節點指向新節點,並令新節點的下一節點為temp
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
  }
  remove(index){//移除任一節點
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1) return this.pop();

    let preNode = this.get(index - 1);
    let removed = preNode.next;
    preNode.next = removed.next;
    this.length--;

    return removed;
  }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('there');
list.push('123');
list.pop();


