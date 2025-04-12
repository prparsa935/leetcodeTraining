/**
 * Definition for a binary tree node.

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

backTrack = (left, right, n) => {
  if (right === left) {
    return [new TreeNode(left)];
  }
  if (right < left) {
    return [null];
  }
  let result = [];
  for (let i = left; i <= right; i++) {
    const leftNodes = backTrack(1, i - 1);
    const rightNodes = backTrack(i + 1, n);
    const root = new TreeNode(i);
    for (let j = 0; j < leftNodes.length; j++) {
      for (let f = 0; f < rightNodes.length; f++) {
        
        root.left = leftNodes[j];
        root.right = rightNodes[f];
        result.push(root);
      }
    }
  }
  return result;
};
var generateTrees = function (n) {
  return backTrack(1, n, n);
};
