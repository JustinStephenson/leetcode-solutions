import java.util.HashSet;
import java.util.Set;

public class Longest_Substring_Without_Repeating_Characters {
	
    public int lengthOfLongestSubstring(String s) {
    	Set<Character> set = new HashSet<>();
    	int i = 0;
    	int j = 0;
    	int count = 0;
        while (j < s.length()) {
        	if (!set.contains(s.charAt(j))) {
        		set.add(s.charAt(j++));
        		count = Math.max(count, set.size());
        	}
        	else {
        		set.remove(s.charAt(i++));
        	}
        }
        return count;
    }
    
}
