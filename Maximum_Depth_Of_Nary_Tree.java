import java.util.List;

public class Maximum_Depth_Of_Nary_Tree {
	
	class Node {
	    public int val;
	    public List<Node> children;

	    public Node() {}

	    public Node(int _val) {
	        val = _val;
	    }

	    public Node(int _val, List<Node> _children) {
	        val = _val;
	        children = _children;
	    }
	}
	
	class Solution {
	    public int maxDepth(Node root) {
	        int depth = 0;
	        if (root == null) {
	        	return depth;
	        }
	      
	        for (Node node : root.children) {
	        	int childDepth = maxDepth(node);
	        	
	        	if (depth < childDepth) {
	        		depth = childDepth;
	        	}
	        }
	        return depth + 1;
	    }
	}

}
