import java.util.Stack;

public class Final_Prices_With_A_Speical_Discount_In_A_Shop {
	
    public int[] finalPrices(int[] prices) {
    	Stack<Integer> stack = new Stack<>();
    	for (int i = 0; i < prices.length; i++) {
    		while(!stack.isEmpty() && prices[stack.peek()] >= prices[i]) {
    			prices[stack.pop()] -= prices[i];
    		}
    		stack.push(i);
    	}
    	return prices;
    }

}
