
public class Count_Of_Mathces_In_Tournament {
	
    public int numberOfMatches(int n) {
    	if (n == 0 || n == 1) {
    		return 0;
    	}
    	int numOfTeams = 0;
        if (n % 2 == 0) {
        	n = n / 2;
        	numOfTeams = n;
        }
        else {
        	numOfTeams = (n - 1) / 2 + 1;
        	n = (n - 1) / 2;
        }
    	return n + numberOfMatches(numOfTeams);
    }

}
