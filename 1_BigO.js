
//時間複雜度
function shoes1(n) {
  let value = n+1;
  return value
}

function shoe2s(n) {
  let value = n+1;
  for (let index = 0; index < value; index++) {
    console.log("阿敏有"+ index + "雙鞋子");
  }
  return value
}
console.log(shoes2(8));

function shoes3(n) {
  let value = n+1;
  for (let index = 1; index < value; index++) {
    console.log("阿敏買了"+ index + "雙鞋子");
    for (let j = 1; j < value; j++) {
      console.log("阿敏買了"+ j + "雙襪子");
    }
  }
  return value
}
console.log(shoes3(8));


//空間複雜度
function show(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i);
  }
  console.log(array);
}
show(5)


function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {//長度需要一致
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    const index = arr2.indexOf(element);//第二個迴圈
    
    if (index === -1) {//元素沒有出現在arr2
      return false
    }else{
      arr2.splice(index,1)//有的話就從arr2中將元素移除
    }
  }
  return true
}
console.log(same([1,2,3,1],[3,1,2,1]));//true



function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const freqCount1 = {};
  const freqCount2 = {};
  for (item in arr1) {
    freqCount1[arr1[item]] = ( freqCount1[arr1[item]] || 0)+1 ;
  }
  for (item in arr2) {
    freqCount2[arr2[item]] = ( freqCount2[arr2[item]] || 0)+1 ;
  }
  
  for (item in freqCount1) {
    if(!freqCount2.hasOwnProperty(item)){//判斷第二物件是否有這個key
      return false
    }
    if (freqCount1[item] !== freqCount2[item]) {//檢查兩邊key值
      return false
    }
  }
  return true
}
console.log(same1([1,2,3,1],[3,1,2,1]));//true


