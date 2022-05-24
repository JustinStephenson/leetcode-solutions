
public class Power_of_Four {
	class Solution {
	    public boolean isPowerOfFour(int num) {
	        double x = (Math.log(num)/Math.log(4));
	        return x == (int)x;
	    }
	}
}
