
public class Ugly_Number {
	class Solution {
	    public boolean isUgly(int num) {
            if (num == 0) {
                return false;
            }
            while(num % 2 == 0 || num % 3 ==0 || num % 5 == 0) {
                if (num % 2 == 0) {
                    num = num/2;
                }
                else if (num % 3 == 0) {
                    num = num/3;
                }
                else {
                    num = num/5;
                }
            }
            return num == 1;
        }
	}
}
