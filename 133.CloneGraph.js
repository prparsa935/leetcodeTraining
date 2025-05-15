/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  let visited = new Map();
  const dfs = (n) => {
    if (visited.has(n.val)) {
      return visited.get(n.val);
    }
    let copyNode = new _Node(n.val);
    visited.set(copyNode.val, copyNode);
    for (let neighbor of n.neighbors) {
      copyNode.neighbors.push(dfs(neighbor));
    }
    return copyNode;
  };
  return visited.get(node.val);
};
