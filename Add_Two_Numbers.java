
public class Add_Two_Numbers {
	
	public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val = x; }
	}
	
	class Solution {
	    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
	        ListNode result = new ListNode(0);
	        ListNode temp = result;
	        int sum = 0;
	        int carry = 0;
	        while(l1 != null || l2 != null || sum > 0) {
	            
	            if (l1 != null) {
	                sum += l1.val;
	                l1 = l1.next;
	            }
	            
	            if (l2 != null) {
	                sum += l2.val;
	                l2 = l2.next;
	            }
	            
	            if (sum >= 10) {
	                sum -= 10;
	                carry++;
	            }
	            temp.next = new ListNode(sum);
	            temp = temp.next;
	            sum = carry;
	            carry = 0;
	        }
	            
	        return result.next;
	    }
	}
}
