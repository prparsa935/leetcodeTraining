/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = head;
  while (head && head.next) {
    if (head.next && head.next.val === head.val) {
      const prev = head;
      while (head.next && head.next.val === head.val) {
        head = head.next;
      }
      prev.next = head.next;
    }
    prev = head;
    head = head.next;
  }
  return dummy;
};
