const longestSubArray = (arr, end) => {
  let prevArr = [];
  if(end===0){
    return 0
  }
  for (let i = end; i >= 0; i--) {
    if (arr[i] < arr[end]) {
      prevArr.push(i);
    }
  }

  return 1 + (prevArr.length ? Math.max(...prevArr.map((index) => longestSubArray(arr, index))) : 0)
};
console.log(longestSubArray([2,4,1,10,11,1],5))