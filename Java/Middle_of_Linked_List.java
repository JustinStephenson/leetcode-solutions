
public class Middle_of_Linked_List {
	 public class ListNode {
		int val;
		ListNode next;
		ListNode(int x) { val = x; }
		}
	 
	 class Solution {
		 public ListNode middleNode(ListNode head) {
			 ListNode resultNode = head;
			 int i = 0;
			 while (head != null) {
		       	i++;
		       	if (i % 2 == 0) {
		       		resultNode = resultNode.next;
		       	}
				head = head.next;
			 }
			 return resultNode;
		 }
	 }
}
