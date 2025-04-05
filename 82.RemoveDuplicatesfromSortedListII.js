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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var deleteDuplicates = function (head) {
  if (!head) {
      return head
  }
  if (!head.next) {
      return head;
  }

  let dummy = head;
  let prev = null;


  while (head && head.next) {
      if (head.next.val === head.val) {
          while (head.next && head.next.val === head.val) {
              head = head.next;
          }
          if (prev === null) {
              dummy = head.next
              prev = null
              head = head.next
          }
          else {
              prev.next = head.next;
              head = head.next;
          }
          continue;

      }
      prev = head
      head = head.next;
  }
  return dummy;
};
