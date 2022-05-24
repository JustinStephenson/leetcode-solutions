
public class Merge_Two_Sorted_Lists {
	public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val = x; }
	}
	
	class Solution {
	    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
	        if (l1 == null) {
	        	return l2;
	        }
	        if (l2 == null) {
	        	return l1;
	        }
	        ListNode resultHead = new ListNode(0);
	        ListNode result = resultHead;
	        while (l1 != null && l2 != null) {
	        	if (l1.val < l2.val) {
	        		result.next = l1;
	        		l1 = l1.next;
	        	}
	        	else {
	        		result.next = l2;
	        		l2 = l2.next;
	        	}
	        	result = result.next;
	        }
	        while (l1 != null) {
        		result.next = l1;
        		l1 = l1.next;
        		result = result.next;
	        }
	        while (l2 != null) {
        		result.next = l2;
        		l2 = l2.next;
        		result = result.next;
	        }
	        return resultHead.next;
	    }
	}
}
