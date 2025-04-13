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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const validateAndSwap = (node, max, min) => {
    if (max !== null && max.val < node.val) {
      [max.val, node.val] = [node.val, max.val];
      return;
    } else if (min !== null && min.val > node.val) {
      [min.val, node.val] = [node.val, min.val];
    }
    validateAndSwap(node.left, node, min);
    validateAndSwap(node.right, max, node);
  };
  validateAndSwap(root, null, null);
  return root;
};
