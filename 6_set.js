
// class Set {
//   constructor(args) {
//     this.items = {};
//   }
//   has(value){} //集合中是否有該元素
//   add(value){} //在集合中加入元素
//   remove(value){} //在集合中移除元素
//   clear(){} //清除集合中的元素
//   size(){} //集合中有多少元素
//   union(otherSet){} //聯集,回傳一個包含兩個集合中所有元素的新集合
//   intersection(otherSet){} //交集,對於給定兩集合，回傳一個包含兩個集合中共有元素的新集合
//   difference(otherSet){} //差集,對於給定兩集合，回傳一個包含所有存在第一個集合但不存在於第二集合的元素集合
//   subSet(otherSet){} //子集,驗證給定集合是否為另一個集合的子集
// }

class Set {
  constructor(args) {
    this.items = {};
  }
  has(value){
    return this.items.hasOwnProperty(value);
  } 
  add(value){
    if (!this.has(value)) { //集合內的屬性不能重複
      this.items[value] = value;// 使用方框配合變數來增加屬性
      return true;
    }else{ //已存在則不加入
      return false;
    };
  } 
  remove(value){
    if(this.has(value)){
      delete this.items[value]; //用delete將屬性刪除
      return true
    }else{
      return false
    }
  }
  clear(){
    this.items = {};
  } 
  size(){
    return Object.keys(this.items).length; 
  } 
  values(){//返回一個陣列,內部為集合中的key值
    return (Object.keys(this.items));
  }
  union(otherSet){
    let unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(JSON.parse(values[i]));
    }
    values = otherSet.values();
    for (let j = 0; j < values.length; j++) {
      unionSet.add(JSON.parse(values[j]));
    }
    return unionSet;
  } 
  intersection(otherSet){
    let interSet = new Set();
    let value = this.values();
    for (let i = 0; i < value.length; i++) {
      if (otherSet.has(value[i])) {
        interSet.add(JSON.parse(value[i]));
      }
    }
    return interSet;
  } 
  difference(otherSet){
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(JSON.parse(values[i]));
      }
    }
    values=otherSet.values();
    for (let j = 0; j < values.length; j++) {
      if (!this.has(values[j])) {
        differenceSet.add(JSON.parse(values[j]));
      }
    }
    return differenceSet;
  } 
  subSet(otherSet){
    // 判斷長度,若A集合大於B集合,則返回false,
    // 若無,則進一步判定A集合內的值是否都等於B集合的值
    if (this.size() > otherSet.size()) {
      return false;
    } 
    else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        // B集合是否包含A集合的每個值,無的話返回false
        if (!otherSet.has(values[i])) {
          return false;
        }
        return true;
      }
    }
  } 
}

//一般功能
let set1 = new Set();
set1.add(1);
set1.add(6);
set1.size();
set1.remove(1)
set1.values();

//兩集合操作
let setA = new Set();
setA.add(1);
setA.add(4);
setA.add(2);
setA.add(5);
setA.add(8);
console.log(setA.items);

let setB = new Set();
setB.add(1);
setB.add(4);
setB.add(2);
setB.add(7);
console.log(setB.items);

//聯集
// let unionObject = setA.union(setB);
// console.log(unionObject.items);

//交集
// let interSetObject=setA.intersection(setB);
// console.log(interSetObject.items);

//差集
// let difference = setA.difference(setB);
// console.log(difference.items);

//子集
let subSet = setA.subSet(setB);
console.log(subSet);









