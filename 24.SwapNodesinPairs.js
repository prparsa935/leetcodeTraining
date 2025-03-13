function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) {
    return head;
  }
  //   if (!head.next) {
  //     return head;
  //   }
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    if (next) {
      let next2 = next.next;
      if (prev) {
        prev.next = next;
      } else {
        head = next;
      }
      current.next = next2;
      next.next = current;
    }
    prev = current;
    current = current.next;

    // let next = current.next;
    // current.next = prev;
    // prev.next = next;
    // if (prev2) {
    //   prev2.next = current;
    // }
    // prev2 = current;
    // current = prev.next;
  }
  return head;
};
