function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var addToResult = (list, resultList) => {
  while (list) {
    resultList.next = new ListNode();
    resultList = resultList.next;
    resultList.val = list.val;
    list = list.next;
  }
};
var mergeTwoLists = function (list1, list2) {
  let resultList = new ListNode();
  let dummyResultListNode = resultList;
  while (list1 && list2) {
    dummyResultListNode.next = new ListNode();
    dummyResultListNode = dummyResultListNode.next;
    let val1 = list1.val;
    let val2 = list2.val;
    if (val1 > val2) {
      dummyResultListNode.val = val2;
      list2 = list2.next;
    } else {
      dummyResultListNode.val = val1;
      list1 = list1.next;
    }
  }
  if (list1) {
    addToResult(list1, dummyResultListNode);
  }
  if (list2) {
    addToResult(list2, dummyResultListNode);
  }
  return resultList.next;
};
