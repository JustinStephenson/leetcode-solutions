import java.util.Stack;

public class Valid_Perentheses {
	public class Solution {
		public boolean isValid(String s) {
			Stack<Character> stack = new Stack<Character>();
			for (int i = 0; i < s.length(); i++) {
				char c = s.charAt(i);
				if (c == '(' || c == '{' || c == '[') {
					stack.push(c);
				}
				else {
					if (stack.isEmpty()) {
						return false;
					}
					char check = stack.pop();
					switch (check) {
						case '(':
							if (c != ')') {
								return false;
							}
							break;
						case '{':
							if (c != '}') {
								return false;
							}
							break;
						case '[':
							if (c != ']') {
								return false;
							}
							break;
						default:
							break;
					}
				}
			}
			return stack.isEmpty();
		}
	}
}
