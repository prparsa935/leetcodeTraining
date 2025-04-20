/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let hasSumB = false;
  const hasSum = (node, sum) => {
    if (!node) {
      return;
    }
    if (node.val + sum === targetSum && !node.left && !node.right) {
      hasSumB = true;
      return;
    }
    hasSum(node.left, sum + node.val);
    hasSum(node.right, sum + node.val);
  };
  hasSum(root, 0);
  return hasSumB;
};
