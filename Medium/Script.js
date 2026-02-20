/* Q 1 : Delete Node in a Linked List*/
// ✅ Step 1: Define ListNode
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// ✅ Step 2: Define deleteNode function
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

// ✅ Step 3: Utility to print the list
function printList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// ✅ Step 4: Create Linked List [4,5,1,9]
let node4 = new ListNode(9);
let node3 = new ListNode(1, node4);
let node2 = new ListNode(5, node3); // \U0001f448 this is the node we will delete
let node1 = new ListNode(4, node2); // head of the list

// ✅ Step 5: Delete node with value 5
deleteNode(node2);

// ✅ Step 6: Print final list
printList(node1); // Output: [4, 1, 9]
