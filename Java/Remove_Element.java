
public class Remove_Element {
	class Solution {
	    public int removeElement(int[] nums, int val) {
	    	int valPointer = 0;
	    	int totalVal = 0;
	    	for (int i = 0; i < nums.length; i++) {
	    		if (nums[i] == val) {
	    			totalVal++;
	    		}
	    		else {
	    			int temp = nums[i];
	    			nums[i] = nums[valPointer];
	    			nums[valPointer] = temp;
	    			valPointer++;
	    		}
	    	}
	    	return nums.length - totalVal;
	    }
	}
}
