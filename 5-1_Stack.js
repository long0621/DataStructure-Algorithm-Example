class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first){//資料結構中無任何節點時
            this.first = newNode;
            this.last = newNode;
        } else {//已有節點時
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;//+1後再返回
    }
    pop(){
        if(!this.first) return null;//無節點
        
        let temp = this.first;
        if(this.first === this.last){//只有一個節點時
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let stackData = new Stack();
stackData.push(3);
stackData.push(1);
stackData.push(8);
stackData.pop();

console.log(stackData);
