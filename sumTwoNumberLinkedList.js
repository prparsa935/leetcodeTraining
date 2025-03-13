/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let orginalResultNode = new ListNode();
  let resultNode = orginalResultNode;

  while (l1 || l2 || carry) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let sum = l1Val + l2Val + carry;
    if (sum >= 10) {
      resultNode.val = Number(String(sum)[1]);
      carry = Number(String(sum)[0]);
    } else {
      resultNode.val = sum;
      carry = 0;
    }
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    resultNode.next = new ListNode();
    resultNode = resultNode.next;
  }
  return orginalResultNode;
};
