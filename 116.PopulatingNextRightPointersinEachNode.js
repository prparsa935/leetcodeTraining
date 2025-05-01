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
  const setNext = (node, next) => {
    if (!node) {
      return;
    }

    node.next = next;

    setNext(node.left, node.right);
    setNext(node.right, node.next ? node.next.left : null);
  };
  setNext(root, null);
  return root;
};
