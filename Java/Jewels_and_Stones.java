import java.util.HashSet;

public class Jewels_and_Stones {
	class Solution {
	    public int numJewelsInStones(String J, String S) {
	        HashSet<Character> mySet = new HashSet<Character>();
	        for (int i = 0; i < J.length(); i++) {
	        	mySet.add(J.charAt(i));
	        }
	        int result = 0;
	        for (int i = 0; i < S.length(); i++) {
	        	if (mySet.contains(S.charAt(i))) {
	        		result++;
	        	}
	        }
	        return result;
	    }
	}
}
