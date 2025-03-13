function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  perviusPointer = null;
  nextPointer = head.next;
  firstPointer = head;
  secondPointer = head;

  for (let i = 1; i < n; i++) {
    secondPointer = secondPointer.next;
  }
  while (secondPointer.next) {
    secondPointer = secondPointer.next;
    perviusPointer = firstPointer;
    firstPointer = firstPointer.next;
    nextPointer = firstPointer.next;
  }
  if (perviusPointer) {
    perviusPointer.next = nextPointer;
  } else {
    return (head = head.next);
  }
  return head;
};
