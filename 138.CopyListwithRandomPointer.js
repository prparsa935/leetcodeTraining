/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  let curr = head;
  while (curr) {
    let copy = new _Node(curr.val);
    copy.next = curr.next;
    curr.next = copy;
    curr = copy.next;
  }
  curr = head;
  while (curr) {
    let copy = curr.next;
    if (curr.random) {
      copy.random = curr.random.next;
    }
    curr = copy.next;
  }
  curr = head;
  copyhead = head.next;
  while (curr && curr.next) {
    let copy = curr.next;
    let nextCurr = copy.next;

    curr.next = nextCurr;
    if (copy.next) {
      let nextCopy = copy.next.next;
      copy.next = nextCopy;
    }
    curr = nextCurr;
  }
  return head;
};
