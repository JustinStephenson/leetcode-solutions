
public class Maximum_Number_Of_Ballons {
	
    public int maxNumberOfBalloons(String text) {
    	final String stringToFind = "balloon";
        char[] chars = new char[26];
        char[] find = new char[26];
        int minNumber = text.length();
        
        for (Character c : text.toCharArray()) {
        	chars[c - 'a']++;
        }
        for (Character c : stringToFind.toCharArray()) {
        	find[c - 'a']++;
        }
        for (Character c : stringToFind.toCharArray()) {
        	minNumber = Math.min(minNumber, chars[c - 'a'] / find[c - 'a']);
        }
        return minNumber;
    }

}
