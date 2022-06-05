import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function reverseList(head: ListNode | null): ListNode | null {
	if (head === null) {
		return null;
	}

	let prev = head;
	head = head.next;
	prev.next = null;
	while (head != null) {
		let next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
}
