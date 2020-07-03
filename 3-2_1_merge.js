
//合併函式
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  //兩陣列元素做比較
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    }else{
      result.push(arr2[j]);
      j++
    }
  }
  
  //將多出來的元素插入陣列
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

//console.log(merge([1, 10, 50], [2, 14, 99, 100]));


function mergeSort(arr) {
  if(arr.length <=1) return arr;
  
  let mid = Math.floor(arr.length /2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right);
}

console.log(mergeSort([10,24,76,73,72,1,9]));
