/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  let que = [];
  let index = 0;
  que.push([root, 0]);
  let prev = null;
  while (index < que.length) {
    let node = que[index];
    if (prev && node[1] === prev[1]) {
      prev[0].next = node[0];
    }
    prev = node;
    if (node[0].left) {
      que.push([node[0].left, node[1] + 1]);
    }
    if (node[0].right) {
      que.push([node[0].right, node[1] + 1]);
    }

    index++;
  }
  return root;
};
