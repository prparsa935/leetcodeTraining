/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const convert = (start, end) => {
    if (end < start) {
      return null;
    }
    const middle = start + Math.floor((end - start) / 2);
    const node = new TreeNode();
    node.val = nums[middle];
    node.left = convert(start, middle - 1);
    node.right = convert(middle + 1, end);
    return node;
  };
  return convert(0, nums.length - 1);
};
