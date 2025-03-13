/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var bmmRecursive = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  while (true) {
    a = a % b;

    if (a === 0) {
      break;
    }
    let prevA = a;
    a = b;

    b = prevA;
  }
  return b;
};
var insertGreatestCommonDivisors = function (head) {
  let firstNode = head;
  let secondNode = head.next;

  while (secondNode) {
    let bmm = bmmRecursive(firstNode.val, secondNode.val);

    let bmmNode = new ListNode(bmm, secondNode);
    firstNode.next = bmmNode;

    firstNode = secondNode;
    secondNode = secondNode.next;
  }
  return head;
};
console.log(bmmRecursive(3, 12));
