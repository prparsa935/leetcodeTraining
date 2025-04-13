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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let resultMap = new Map();
  const recursive = (depth, node) => {
    resultMap.set(
      depth,
      resultMap.has(depth) ? [...resultMap.get(depth), node.val] : [node.val]
    );
    recursive(depth + 1, node.left);
    recursive(depth + 1, node.right);
  };

  recursive(0, root);
  resultList = [];
  resultMap.forEach((val) => {
    resultList.push(val);
  });
  return resultList;
};
