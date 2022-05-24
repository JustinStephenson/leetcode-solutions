
public class Remove_Outermost_Parentheses {
	
    public String removeOuterParentheses(String s) {
    	StringBuilder builder = new StringBuilder();
    	int numOfP = 0;
        for (char c : s.toCharArray()) {
        	if (c == '(' && numOfP++ > 0) {
        		builder.append(c);
        	}
        	else if (c == ')' && --numOfP > 0) {
        		builder.append(c);
        	}
        }
        return builder.toString();
    }

}
