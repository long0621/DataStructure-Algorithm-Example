
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value);
    //1.無root情況
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    //2.有root時,判斷往左還是往右走
    let current = this.root;
    while(true){//3.往左走
      if (value < current.value) {//4.插入左節點並返回
        if (current.left === null) {
          current.left=newNode
          return this;
        }
        current = current.left
      }
      //3.往右走
      else if(value > current.value) {//4.插入右節點並返回
        if (current.right === null) {
          current.right=newNode
          return this;
        }
        current = current.right
      }
      //3.插入重複節點
      else {
        console.log("插入重複節點");
        return false
      }
    }
  }
  find(value){
    if(this.root === null) return false;//無節點
    let current = this.root;
    let found = false;
    while (current &&　!found) {//當前還有節點且還沒找到時執行
      if (value < current.value) {
        current = current.left;
      }else if (value > current.value) {
        current = current.right;
      }else{
        found = true;
      }
    }
    // 判斷有無找到
    if (!found) {//都沒找到時
      console.log('cant find the value');
      return false;
    }else {//找到
      return current;
    }
  }
  BFS(){
    let node = this.root;
    let data = [];//已訪問的節點
    let queue = [];//尚未返問的節點
    queue.push(node);
    while (queue.length) {//佇列queue中還有資料時,取出並塞入data中
      node = queue.shift();//取出
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder(){
    let data = [];

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);//用遞迴存入所有的左、右節點
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return data;
  }
  DFSPostOrder(){
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);//用遞迴存入所有的左、右節點
      if (node.right) traverse(node.right);
      data.push(node);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);//用遞迴存入所有的左、右節點
      data.push(node);
      if (node.right) traverse(node.right); 
    }
    traverse(this.root);
    return data;
  }
}




let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(1);
tree.insert(8);
tree.insert(15);
tree.insert(30);

console.log(tree.DFSPreOrder());



//BFS

