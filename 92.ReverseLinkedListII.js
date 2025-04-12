/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = head;
  let prev = null;
  let leftNode = head;
  let rightNode = head;
  let leftIndex = left - 1;
  let rightIndex = right - 1;
  while (leftNode.next && leftIndex) {
    prev = leftNode;
    leftNode = leftNode.next;
    rightNode = leftNode;
    leftIndex--;
    rightIndex--;
  }
  while (rightNode.next && rightIndex) {
    rightNode = rightNode.next;
    rightIndex--;
  }
  if (left === 1) {
    dummy = rightNode;
  }
  prev.next = rightNode;
  let distence = right - left;

  const rightNodeNext = rightNode.next;
  const temp = leftNode.next;
  while (distence >= 1) {
    temp = leftNode.next;
    leftNode.next = rightNode.next;
    rightNode.next = leftNode;
    leftNode = temp;
    distence--;
  }

  return dummy;
};
