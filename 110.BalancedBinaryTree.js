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
 * @return {boolean}
 */

var isBalanced = function (root, isvalid) {
  let isValid = true;
  const maxDepth = (node) => {
    if (!node) {
      return 0;
    }

    let leftTreeDepth = maxDepth(node.left);
    let rightTreeDepth = maxDepth(node.right);
    if (Math.abs(leftTreeDepth - rightTreeDepth) !== 1) {
      isValid = false;
    }
    return Math.max(leftTreeDepth, rightTreeDepth) + 1;
  };
  maxDepth(root);
  return result[0];
};
