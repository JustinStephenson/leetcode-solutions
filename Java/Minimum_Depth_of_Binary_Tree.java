import java.util.LinkedList;
import java.util.Queue;

public class Minimum_Depth_of_Binary_Tree {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	public class Solution {
	    public int minDepth(TreeNode root) {
	    int depth = 0;
	    if (root == null) {
	    	return depth;
	    }
	    Queue<TreeNode> queue = new LinkedList<TreeNode>();
	    queue.add(root);
	    depth++;
	    while (!queue.isEmpty()) {
	    	int size = queue.size();
	    	for (int i = 0; i < size; i++) {
	    		TreeNode node = queue.poll();
	    		if (node.left == null && node.right == null) {
	    			return depth;
	    		}
	    		if (node.left != null) {
	    			queue.add(node.left);
	    		}
	    		if (node.right != null) {
	    			queue.add(node.right);
	    		}
	    	}
	    	depth++;
	    }
	    return depth;
	    }
	}
}
