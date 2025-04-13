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
var isSymmetric = function (root) {
  const isSimetric = (leftTree, rightTree) => {
    if ((!leftTree && rightTree) || (!rightTree && leftTree)) {
      return false;
    }
    if (!leftTree && !rightTree) {
      return true;
    }
    if (leftTree.val !== rightTree.val) {
      return false;
    }
    return (
      isSimetric(leftTree.left, rightTree.right) &&
      isSimetric(leftTree.right, rightTree.left)
    );
  };
  return isSimetric(root.left, root.right);
};
