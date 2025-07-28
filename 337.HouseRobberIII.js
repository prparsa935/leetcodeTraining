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
var rob = function (root) {
  let memo = new Map();
  const recursive = (node, b) => {
    if (!node) {
      return 0;
    }
    if (memo.has(`${node},${b}`)) {
      return memo.get(`${node},${b}`);
    }
    let answer;
    if (b) {
      answer = Math.max(
        recursive(node.left, false) + recursive(node.right, false)
      );
      memo.set(`${node},${b}`, answer);
      return answer;
    }
    answer = Math.max(
      node.val + recursive(node.right, true) + recursive(node.left, true),
      recursive(node.right, false) + recursive(node.left, false)
    );
    memo.set(`${node},${b}`, answer);

    return answer;
  };
  return recursive(root, false);
};
