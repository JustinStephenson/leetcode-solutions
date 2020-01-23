import java.util.HashSet;

public class Contains_Duplicates {
	class Solution {
	    public boolean containsDuplicate(int[] nums) {
	    	HashSet<Integer> table = new HashSet<Integer>();
	    	for (int i = 0; i < nums.length; i++) {
	    		if (!table.add(nums[i])) {
	    			return true;
	    		}
	    	}
	    	return false;
	    }
	}
}
