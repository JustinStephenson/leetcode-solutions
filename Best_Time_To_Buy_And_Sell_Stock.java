
public class Best_Time_To_Buy_And_Sell_Stock {
	
    public int maxProfit(int[] prices) {
        int output = 0;
        int minNum = prices[0];
        for (int i = 1; i < prices.length; i++) {
        	if (prices[i] > minNum) {
        		output = Math.max(output, prices[i] - minNum);
        	}
        	else {
				minNum = prices[i];
			}
        }
        return output;
    }

}
