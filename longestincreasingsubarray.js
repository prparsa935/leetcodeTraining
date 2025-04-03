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

  return Math.max(1 + (prevArr.length ? Math.max(...prevArr.map((index) => longestSubArray(arr, index))) : 0),longestSubArray(arr,end-1))
};
console.log(longestSubArray([2,4,5,6,10,1,20],6))