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
var minDepth = function (root) {
  const minDepth = (node) => {
    if (!node) {
      return 0;
    }
    let rightTreeMin = minDepth(node.right);
    let leftTreeMin = minDepth(node.left);
    if (leftTreeMin === 0 && rightTreeMin !== 0) {
      return rightTreeMin + 1;
    }
    if (rightTreeMin === 0 && leftTreeMin !== 0) {
      return leftTreeMin + 1;
    }

    return Math.min(leftTreeMin, rightTreeMin) + 1;
  };
  return minDepth(root);
};
