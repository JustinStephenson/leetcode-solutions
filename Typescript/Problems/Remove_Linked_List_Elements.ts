import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function removeElements(head: ListNode | null, val: number): ListNode | null {
	if (head === null) {
		return null;
	}

	let prev: ListNode | null = null;
	let node: ListNode | null = head;
	while (node) {
		if (node.val === val) {
			if (prev) {
				prev.next = node.next;
			} else {
				head = node.next;
			}
		} else {
			prev = node;
		}
		node = node.next;
	}

	return head;
}
