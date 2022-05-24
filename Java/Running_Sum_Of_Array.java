
public class Running_Sum_Of_Array {
	
    public int[] runningSum(int[] nums) {
        int[] returnArray = new int[nums.length];
        returnArray[0] = nums[0];
        for (int i = 1; i < returnArray.length; i++) {
        	returnArray[i] =  nums[i] + returnArray[i - 1];
        }
        return returnArray;
    }

}
