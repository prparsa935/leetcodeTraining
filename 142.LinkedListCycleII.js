/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) {
    return null;
  }

  let firstPointer = head.next.next;
  let secondPointer = head.next;
  
  while (firstPointer.val !== secondPointer.val && firstPointer) {
    if (!firstPointer.next) {
      return null;
    }
    firstPointer = firstPointer.next.next;

    secondPointer = secondPointer.next;
  }

  return firstPointer.next;
};
