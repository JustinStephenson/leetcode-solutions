public class Sort_Array_by_Parity {
	
	class Solution {
	    public int[] sortArrayByParity(int[] A) {
	    	int pointer = 0;
	    	//point to odd number
	    	while (A[pointer] % 2 == 0 && pointer < A.length - 1) {
	    		pointer++;
	    	}
	    	for (int i = pointer; i < A.length; i++) {
	    		if (A[i] % 2 == 0) {
	    			int temp = A[i];
	    			A[i] = A[pointer];
	    			A[pointer] = temp;
	    			pointer++;
	    		}
	    	}
	    	return A;
	    }
	}
	
}
