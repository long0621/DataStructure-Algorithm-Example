

//動態規劃:用於求最佳化問題
//大問題若可分割成許多相同重複的子問題,則可將已算過的問題儲存起來避免重複計算讓程式效能更好

//子問題重疊: 大問題分出的子問題會出現重複的狀況
//ex:斐波那契函數, 非重疊:合併排序 mergeSort([10,24,5,81])

//最佳化子結構: 大問題的最佳結果必定為子問題最佳解的集合時
//ex:斐波那契函數、圖形最短路徑

//斐波那契函數:時間複雜度O(2n平方),非常差
function fib_orignal(n) {
  if (n>0 && n<=2) return 1;
  return fib_orignal(n-1) + fib_orignal(n-2);
}

//解決方法一:memorization,將算過的值記錄下來供查找 
//時間複雜度約為 O(n),可能會有堆疊溢出的問題
function fib_memor(n,memo=[]) {
  if (memo[n] !== undefined) return memo[n];//有被儲存過則直接返回該筆資料
  if (n>0 && n<=2) return 1;

  let res = fib_memor(n-1,memo) + fib_memor(n-2,memo);
  memo[n] = res;
  console.log(memo);
  return res;
}

fib(5);

//解決方法二:tabulation(自下而上)
//時間複雜度同上,不會有堆疊溢出的問題
function fib_tabul(n) {
  if (n <=2) return 1;
  let fibNums = [0,1,1];
  for (let i = 3; i <=n; i++){ //依序往上加到所要的值
    fibNums[i] = fibNums[i-1] + fibNums[i-2]; 
  }
  return fibNums[n]; 
}
