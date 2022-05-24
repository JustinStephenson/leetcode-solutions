
public class Slowest_Key {
	
    public char slowestKey(int[] releaseTimes, String keysPressed) {
    	char maxTimeKey = keysPressed.charAt(0);
        int maxTime = releaseTimes[0];
        
        for (int i = 1; i < releaseTimes.length; i++) {
        	int diff = releaseTimes[i] - releaseTimes[i - 1];
        	if (maxTime < diff) {
        		maxTime = diff;
        		maxTimeKey = keysPressed.charAt(i);
        	}
        	else if (maxTime == diff && (int)maxTimeKey < (int)keysPressed.charAt(i)) {
        		maxTimeKey = keysPressed.charAt(i);
        	}
        }
        return maxTimeKey;
    }

}
