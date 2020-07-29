

// 儲存的方式有兩種:
// 1.同一位置儲存多筆資料(以陣列形式往下加)
// 2.碰到位置一樣時(該格已有資料),自動往後查找做儲存

// class name {
//   constructor(size=53){
//     this.keyMap = new Array(size);
//   }
//   _hash(key){}
//   set(key,value){}
//   get(key){}
//   values(){}
//   keys(){}
// }

class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key,value){
    let index = this._hash(key);
    if(!this.keyMap[index]){//檢查索引index在keyMap中是否有值,無值時則新增一個陣列
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {//遍歷該位置的所有陣列,並比對每筆第一項是否符合key
        if (this.keyMap[index][i][0] == key) {
          return this.keyMap[index][i][1];//符合條件的話返回value(第二筆資料)
        }
      }
    }
    return undefined;//找不到返回undefined
  }
  values(){
    let valuesArr=[];
    for (let i = 0; i < this.keyMap.length; i++) {//遍歷水平元素
      if (this.keyMap[i]) {//該位置有資料
        for (let j = 0; j < this.keyMap[i].length; j++) {//遍歷垂直元素
          if (!valuesArr.includes(this.keyMap[i][j][1])) {//檢查是否重複
            valuesArr.push(this.keyMap[i][j]);
          }
        }
        console.log(this.keyMap[i]);
      }
    }
    return valuesArr;
  }
  keys(){
    let keysArr=[];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
        console.log(this.keyMap[i]);
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();
ht.set("hi123","goodbye");
ht.set("test123","123555");
ht.set("test1","456");


ht.get("test1"); //從test123/test1中找出test1


