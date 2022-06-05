import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function detectCycle(head: ListNode | null): ListNode | null {
	let fast: ListNode | null = head;
	let slow: ListNode | null = head;
	let cycleFound: boolean = false;

	while (fast != null && fast.next != null && !cycleFound) {
		fast = fast.next.next; // goes 2 times faster than slow
		slow = slow!.next;

		if (slow === fast) {
			cycleFound = true;
		}
	}
	slow = head;
	while (cycleFound) {
		if (slow === fast) {
			return slow;
		}

		fast = fast!.next;
		slow = slow!.next;
	}

	return null;
}
