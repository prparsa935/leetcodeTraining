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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const recursive = (node, list) => {
    if (!node) {
      return;
    }
    list.push(node.val);
    recursive(node.left, list);
    recursive(node.right, list);
  };

  let list = [];
  recursive(root, list);
  return list;
};
