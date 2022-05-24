
public class Design_A_Stack_With_Increment_Operation {
	
	class CustomStack {
		private int maxSize;
		private int[] stack;
		private int stackPointer;

	    public CustomStack(int maxSize) {
	    	this.maxSize = maxSize;
	        stack = new int[maxSize];
	        stackPointer = 0;
	    }
	    
	    public void push(int x) {
	    	if (stackPointer != maxSize) {
	    		stack[stackPointer++] = x;	
	    	}
	    }
	    
	    public int pop() {
	    	if (stackPointer == 0) {
	    		return -1;
	    	}
	        return stack[--stackPointer];
	    }
	    
	    public void increment(int k, int val) {
	    	int loopNum = k < stackPointer ? k : stackPointer;
	        for (int i = 0; i < loopNum; i++) {
	        	stack[i] += val;
	        }
	    }
	}

}
