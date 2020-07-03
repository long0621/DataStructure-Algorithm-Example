

function selection(arr) {
  for (let i = 0; i < arr.length-1; i++) {//執行次數
    let lowest = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {//下一項比當前小時,覆蓋索引
        lowest = j;
      }
    }
    if (i !== lowest) {//避免已排序時重複執行交換程式碼
      //找到最小後,做交換
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr
}

console.log(selection([87,5,12,6]));