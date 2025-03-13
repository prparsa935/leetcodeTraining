function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let sumList = new ListNode();
  let sumListDumy = sumList;
  let currentNode = head;
  let sumStarted = false;
  let sum = 0;
  while()
  while (true) {
    if (sumStarted === false) {
      if (currentNode.val === 0) {
        sumStarted = true;
      }
    } else {
      if (currentNode.val === 0) {
        sumListDumy.next = new ListNode(sum);
        sumListDumy = sumListDumy.next;
        sum = 0;
      } else {
        console.log(currentNode.val);
        sum += currentNode.val;
      }
    }
    if (!currentNode.next) {
      break;
    }

    currentNode = currentNode.next;
  }
  return sumList.next;
};
