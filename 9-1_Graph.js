
//圖形有matrix/list 兩種組合,各有優缺,試情況使用
// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex){}
//   addEdge(v1,v2){}
//   removeEdge(v1,v2){}
//   removeVertex(vertex){}
//   depthFirstRecursive(start){}
//   depthFirstIterative(start){}
//   breadthFirst(start){}
// }

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex){//添加頂點
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1,v2){//增加邊(雙向)
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1,v2){//移除邊,使用filter將不移除的拉出來
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    )
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    )
  }
  removeVertex(vertex){//移除頂點
    while (this.adjacencyList[vertex].length) {//1.移除頂點前,需先找到有關聯的頂點並將關聯移除
      const adjacencyVertex = this.adjacencyList[vertex].pop();//取得關聯的頂點(尾元素)
      this.removeEdge(vertex,adjacencyVertex);//移除邊
    }
    delete this.adjacencyList[vertex]; //2.關聯移除後再刪除頂點本身
  }
  depthFirstRecursive(start){//DFS使用遞迴
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if(!vertex) return null; //不是頂點返回null
      visited[vertex] = true; //代表節點已訪問
      result.push(vertex);

      //對該頂點有相連的頂點做foreach
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {//還未訪問過就代入neighbor繼續執行dfs
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {//stack裡有元素就直行
      currentVertex = stack.pop();//取出並存進result
      result.push(currentVertex);

      //開始訪問相鄰的元素
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
