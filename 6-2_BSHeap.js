//BS Max Heap: 每個子節點皆會比父節點小,每個節點最多只有兩個子節點


class MaxBinaryHeap {
  constructor() {
    this.values =[];
  }
  insert(element){//先行插入末端後判斷是否交換位置
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1 ;
    const element = this.values[idx];
    while(idx >0){//idx不可為負數
      let parentIdx = Math.floor((idx-1)/2);//根據公式(觀察法)得到
      let parent = this.values[parentIdx];
      //不用交換時,直接結束迴圈
      if (element<=parent) break;
      //插入元素大於父元素時要執行交換
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx =parentIdx;
    }
  }
  extractMax(){//取出最大元素,之後將尾元速提出放置首位後並將之放到正確位置
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length>0) {//只有一個元素時
      this.values[0] = end;
      this.sinkDown();//將end元素放到正確位置
    }
    return max;
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
        if (leftChild>element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx<length) {
        rightChild =this.values[rightChildIdx];
        if ((swap === null && rightChild>element)|| //額外判斷邏輯[33,41,39]
            (swap !== null && rightChild>leftChild))
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(50);

console.log(heap);


//[41,39,33,18,27,12]
//  0  1  2  3  4  5




