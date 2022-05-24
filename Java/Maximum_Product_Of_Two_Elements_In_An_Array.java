
public class Maximum_Product_Of_Two_Elements_In_An_Array {
	
    public int maxProduct(int[] nums) {
        int max = 0;
        int secondMax = 0;
        for (int i = 0; i < nums.length; i++) {
        	int arrayValue = nums[i];
        	if (max <= nums[i]) {
        		secondMax = max;
        		max = arrayValue;
        	}
        	else if (secondMax < arrayValue) {
        		secondMax = arrayValue;
        	}
        }
        return ((max - 1) * (secondMax - 1));
    }

}
