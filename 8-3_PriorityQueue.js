//優先佇列可以使用陣列或BSHeap做實現,用陣列時間複雜度會比較差
class Node {
  constructor(val,priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values =[];
  }
  enqueue(val,priority){//先行插入末端後判斷是否交換位置
    let newNode = new Node(val,priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1 ;
    const element = this.values[idx];
    while(idx >0){//idx不可為負數
      let parentIdx = Math.floor((idx-1)/2);//根據公式(觀察法)得到
      let parent = this.values[parentIdx];
      //不用交換時,直接結束迴圈
      if (element.priority>=parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx =parentIdx;
    }
  }
  dequeue(){//取出最大元素,之後將尾元速提出放置首位後並將之放到正確位置
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length>0) {//只有一個元素時
      this.values[0] = end;
      this.sinkDown();//將end元素放到正確位置
    }
    return min;
  }
  sinkDown(){
    let idx= 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;//找出左右子節點
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if (leftChildIdx<length) {//確保找的到子元素
        leftChild =this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx<length) {
        rightChild =this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority)|| //額外判斷邏輯[33,41,39]
            (swap !== null && rightChild.priority < leftChild.priority))
        {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue('common',3);
ER.enqueue('break',5);
ER.enqueue('fever',1);

ER.dequeue();


//[41,39,33,18,27,12]
//  0  1  2  3  4  5




