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
var insertionSortList = function (head) {
  let firstNode = head;
  let currNode = head.next;
  let prev = head;
  while (currNode) {
    let currSorted = firstNode;
    while (currSorted) {
      if (currNode.val < currSorted.val) {
        if (currSorted.val === firstNode.val) {
          firstNode = currNode;
        }
        prev.next = currNode;
        currSorted.next = currNode.next;
        currNode.next = currSorted;
        break;
      }
      currSorted = currSorted.next;
    }

    currNode = currSorted.next;
  }
};
