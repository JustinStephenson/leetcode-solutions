import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function hasCycle(head: ListNode | null): boolean {
	let fast: ListNode | null = head;
	let slow: ListNode | null = head;

	while (fast != null && fast.next != null) {
		fast = fast.next.next; // goes 2 times faster than slow
		slow = slow!.next;

		if (slow === fast) {
			return true;
		}
	}
	return false;
}
