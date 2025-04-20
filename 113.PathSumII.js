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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const result = [];
  const recursive = (node, path, sum) => {
    if (!node) {
      return;
    }
    path.push(node.val);

    if (node.val + sum === targetSum && !node.left && !node.right) {
      result.push([...path]);
    }
    recursive(node.left, path, sum + node.val);
    recursive(node.right, path, sum + node.val);
    path.pop();
  };
  recursive(root, [], 0);
  return result;
};
