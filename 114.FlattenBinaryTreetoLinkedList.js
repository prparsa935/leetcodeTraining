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
var flatten = function (root) {
  const buildLinkedList = (node) => {
      if (!node) {
          return
      }
      let leftNode = node.left;
      if (!node.left && !node.right) {
          return;
      }
      if (leftNode) {
          while (leftNode.right) {
              leftNode = leftNode.right;
          }
          leftNode.right = node.right;
          node.right = node.left;
          node.left = null
      }

      buildLinkedList(node.right);
  };
  buildLinkedList(root);
  return root;
};
