
public class Merge_Sorted_Array {
	
    public void merge(int[] nums1, int m, int[] nums2, int n) {
    	int tail1 = m - 1;
    	int tail2 = n - 1;
    	int end = m + n - 1;
    	// merge from back
        while (tail1 >= 0 && tail2 >= 0) {
        	nums1[end--] = nums1[tail1] > nums2[tail2] ? nums1[tail1--] : nums2[tail2--];
        }
        // fill in remaining only from num2
        while (tail2 >= 0) {
        	nums1[end--] = nums2[tail2--];
        }
    }

}
