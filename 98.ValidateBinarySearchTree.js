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
var isValidBST = function (root) {
  const backTrack = (max, min, node) => {
    if (!node) {
      return true;
    }
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }
    return (
      backTrack(node.val, min, node.left) &&
      backTrack(max, node.val, node.right)
    );
  };
  return backTrack(null, null, root);
};
