/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let isSame = (node1, node2) => {
    if ((!node1 && node2) || (!node2 && node1)) {
      return false;
    }
    if (!node2 && !node1) {
      return true;
    }

    if (node1.val !== node2.val) {
      return false;
    }
    return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  };
  return isSame(p, q);
};
