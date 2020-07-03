

function insertion(arr)
{
  for(let i = 1; i< arr.length; i++)
  {
    let currentVal = arr[i];
    let j = 0;
    for (j = i - 1; j > -1; j--) {
      // the place we're looking is still too big -> copy value to the right to make room
      if (currentVal < arr[j]) {
        arr[j+1] = arr[j]
      // don't need to copy anymore because we've successfully made room
      } else {
        break;
      }
    }
    // put our currentVal in the spot we created for it
    arr[j+1] = currentVal
  }
  return arr;
}

