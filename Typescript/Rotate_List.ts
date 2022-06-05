import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (head === null) {
		return null;
	}

	let node: ListNode = head;
	let length: number = 1;

	// get length and last node
	while (node.next != null) {
		length++;
		node = node.next;
	}
	// make a circular linked list
	node.next = head;
	// find where to cut, and make new head
	let cutPoint: number = length - (k % length);
	while (cutPoint > 0 && node.next != null) {
		node = node.next;
		cutPoint--;
	}
	head = node.next;
	node.next = null;

	return head;
}

const list = new ListNode(1);
list.next = new ListNode(2);
console.log(rotateRight(list, 0));
