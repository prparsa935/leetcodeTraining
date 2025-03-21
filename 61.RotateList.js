/**

 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var rotateRight = function (head, k) {
  if (!head.next) {
    return head;
  }
  let firstPos = head;
  let lastPos = head;
  let cutPos = head;
  let count = 1;
  let result = head;

  while (lastPos.next) {
    lastPos = lastPos.next;
    count++;
  }
  realRotate = count - (k % count);

  for (let i = 0; i < realRotate; i++) {
    cutPos = cutPos.next;
  }
  lastPos.next = firstPos;
  result = cutPos.next;
  cutPos.next = null;
  return result;

  //   for (let i = 0; i < realRotate; i++) {
  //     beforeLastPos.next
  //   }
};
