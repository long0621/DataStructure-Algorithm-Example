

function bubble(arr) {
  for (let i = array.length; i > 0; i--) {//對每個元素作迭代
    for (let j = 0; j < i-1; j++) {//自動扣除最後一個循環(已排序)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

//bubble([37,4,29,15])


function bubble1(arr) {
  for (let i = array.length; i > 0; i--) {//對每個元素作迭代
    let noSwap = true;
    for (let j = 0; j < i-1; j++) {//自動扣除最後一個循環(已排序)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;//第一次若沒進行迭代之後就不會執行了
  }
  return arr
}

bubble1([37,1,2,3])

