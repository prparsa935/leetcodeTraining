/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let j = 0;
  let i = 0;
  let newArray = [];
  let sum = 0;
  let aSum = 0;
  while (true) {
    let justILeft = false;
    let justJLeft = true;
    if (nums1[i] < nums2[j] || justILeft) {
      newArray.push(nums1[i]);
      sum += nums1[i];
      aSum += 1;
      i++;
    } else if (nums1[i] >= nums2[j] || justJLeft) {
      newArray.push(nums2[j]);
      sum += nums2[j];
      aSum += 1;
      j++;
    }

    justJLeft = nums1.length - 1 === i ? true : false;
    justILeft = nums2.length - 1 === j ? true : false;
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
