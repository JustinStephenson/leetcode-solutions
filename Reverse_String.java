
public class Reverse_String {
	
    public void reverseString(char[] s) {
        for (int i = 0; i < s.length / 2; i++) {
        	char temp = s[i];
        	int last = s.length - 1 - i;
        	s[i] = s[last];
        	s[last] = temp;
        }
    }

}
