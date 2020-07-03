function LinearSearch(array,value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) { return i; }
  }
  return -1;//尋找的元素不在陣列中
}
console.log(LinearSearch([1,3,8,2,7,5],10));


function Search(arr,value) {
  let left = 0;
  let right = arr.length-1
  
  while (left <= right) {//邊界情況:left/right/middle都在同一元素上
    let middle = Math.floor((left+right)/2)//2
    if (arr[middle] > value) {
      right = middle - 1
    }else if(arr[middle] < value) {
      left = middle + 1
    }else{//找到元素
      return middle
    }
  }
  return -1
}

  console.log(Search([1,3,5,7,9],9));


