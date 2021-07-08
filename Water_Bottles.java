
public class Water_Bottles {
	
    public int numWaterBottles(int numBottles, int numExchange) {
        return numWaterBottlesHelper(numBottles, 0, numExchange);
    }
    
    public int numWaterBottlesHelper(int fullBottles, int emptyBottles, int numExchange) {
    	int bottlesDrank = 0;
        if (fullBottles == 0) {
        	return bottlesDrank;
        }
        
        int newFullBottles = (fullBottles + emptyBottles) / numExchange;
        int newEmptyBottles = (fullBottles + emptyBottles) % numExchange;
        bottlesDrank += fullBottles + numWaterBottlesHelper(newFullBottles, newEmptyBottles, numExchange);
        return bottlesDrank;
    }

}
