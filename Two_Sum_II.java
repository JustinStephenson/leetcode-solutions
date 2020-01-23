
public class Two_Sum_II {
	class Solution {
	    public int[] twoSum(int[] numbers, int target) {
	        int i = 0;					//index at start of array.
	        int j = numbers.length - 1;	//index at end of array.
	        int[] result = new int[2];
	        while (i < numbers.length - 1 && j >= 0) {
	        	int sum = numbers[i] + numbers[j]; 
	        	if (sum == target) {
	        	    result[0] = i + 1;
	        		result[1] = j + 1;
	        		return result;
	        	}
	        	else if (sum > target) {
	        		j--;
	        	}
	        	else {
                    i++;
	        	}
	        }
	        return result;
	    }
	}
}
