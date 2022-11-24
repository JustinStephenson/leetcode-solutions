import { ListNode } from '../DataStructuresForProblems/SinglyLinkedList';

function isPalindrome(head: ListNode | null): boolean {
	let slow = head; // inc by 1
	let fast = head; // inc by 2
	let start = head;

	// get slow to middle of LL, fast to end of LL
	while (fast && fast.next) {
		slow = slow!.next;
		fast = fast.next.next;
	}

	// use slow to reverse second half of LL
	let temp = null;
	let prev = slow;
	slow = slow!.next;
	prev!.next = null;
	while (slow) {
		temp = slow.next;
		slow.next = prev;
		prev = slow;
		slow = temp;
	}

	// slow is not at the end, use slow and start to check for palindrome
	slow = prev;
	while (slow) {
		if (start!.val !== slow.val) {
			return false;
		} else {
			start = start!.next;
			slow = slow.next;
		}
	}

	return true;
}
