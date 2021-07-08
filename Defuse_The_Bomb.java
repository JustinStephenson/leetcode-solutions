
public class Defuse_The_Bomb {
	
    public int[] decrypt(int[] code, int k) {
    	int[] result = new int[code.length];
    	int kAbs = Math.abs(k);
    	
    	for (int i = 0; i < code.length; i++) {
    		int total = 0;
    		if (k > 0) {
    			for (int j = 1; j <= kAbs; j++) {
    				total += code[(i + j) % code.length];
    			}
    		}
    		else if (k < 0) {
    			for (int j = 1; j <= kAbs; j++) {
    				total += code[(i - j + code.length) % code.length];
    			}
    		}
    		else {
				total = 0; 
			}
    		result[i] = total; 
    	}
    	return result;
    }

}
