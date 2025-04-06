/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let part1 = null;
  let dummy = null;
  let part2 = null;
  let dummy2 = null;

  while (head) {
    if (head.val >= x) {
      if (part2) {
        part2.next = head;
        part2 = part2.next;
      } else {
        part2 = head;
        dummy2 = head;
      }
    } else {
      if (part1) {
        part1.next = head;
        part1 = part1.next;
      } else {
        dummy = head;
        part1 = head;
      }
    }
    head = head.next;
  }
  if (part2) {
    part2.next = null;
  }
  if (part1) {
    part1.next = dummy2;
  } else {
    dummy = dummy2;
  }

  return dummy;
};
