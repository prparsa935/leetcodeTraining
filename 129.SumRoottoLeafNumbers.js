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
 * @return {number}
 */
var sumNumbers = function (root) {
  let resultSum = 0;
  const dfs = (node, sum) => {
    if (!node.left && !node.right) {
      resultSum += Number(sum + node.val);
    }
    if (node.left) {
      dfs(node.left, sum + node.val);
    }
    if (node.right) {
      dfs(node.right, sum + node.val);
    }
  };
  dfs(root,'')
  return resultSum;
};
