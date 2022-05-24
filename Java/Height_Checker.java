import java.util.Arrays;

public class Height_Checker {
	public class Solution {
		public int heightChecker(int[] heights) {
			int[] temp = Arrays.copyOf(heights, heights.length);
			Arrays.sort(temp);
			int result = 0;
			for (int i = 0; i < heights.length; i++) {
				if (heights[i] != temp[i]) {
					result++;
				}
			}
			return result;
		}
	}
}
