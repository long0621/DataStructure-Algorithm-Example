

//最短路徑
//圖形需加入權重,才能進行比較
//ch235 新例子,find A-E 最短路徑

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val,priority){
    this.values.push({val,priority});
    this.sort();
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){//進行優先權排序
    this.values.sort((a,b)=>a.priority-b.priority);
  }
}

class weightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){//添加頂點
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1,v2,weight){//增加邊(雙向)
    this.adjacencyList[v1].push({node:v2,weight});
    this.adjacencyList[v2].push({node:v1,weight});
  }
  Dijkstra(start, finish){//A,E
    //初始時表中除了頂點自己的距離為0外,其餘皆為無限大
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    //初始化,起始點設為0,其餘設為無限大
    //console.log(this.adjacencyList);
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex,0);
        //console.log(nodes);
      }else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex,Infinity);
      }
      previous[vertex] = null;
      //console.log(nodes);
    }
    //console.log(nodes.values);

    
    //主要邏輯
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;//A B
      if (smallest === finish) {//等於輸入的finish代表已完成查找,返回路徑
        while(previous[smallest]){
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        //neighbor為數字
        for (let neighbor in this.adjacencyList[smallest]) { //0 1 0
          //用neighbor作索引取得鄰接節點
          let nextNode = this.adjacencyList[smallest][neighbor]; //{N:B,W:4} {C,2} {A,4}
          //計算smallest節點到鄰接節點的距離
          let candidate = distances[smallest]+nextNode.weight; //4 2 
          let nextNeighbor = nextNode.node; //B C
          if (candidate < distances[nextNeighbor]) {//距離比較小則進行更新
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - how we got to next neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            console.log(nextNeighbor,candidate);
            nodes.enqueue(nextNeighbor,candidate); // (B,4)(C,2)
            console.log(nodes.values);
          }
        } 
      }
    }
    return path.concat(smallest).reverse();
  }
}

// {
//   "A":[{node:"B",weight:10}]
// }
let graph = new weightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);

//test
graph.Dijkstra("A","E");


