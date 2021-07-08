

public class Sum_Of_Left_Leaves {
	
	 // Definition for a binary tree node.
	 public class TreeNode {
     int val;
	    TreeNode left;
	    TreeNode right;
	    TreeNode() {}
	    TreeNode(int val) { this.val = val; }
	    TreeNode(int val, TreeNode left, TreeNode right) {
	        this.val = val;
	        this.left = left;
	        this.right = right;
	     }
	 }
	
	class Solution {		
	    public int sumOfLeftLeaves(TreeNode root) {
	    	return sumOfLeftLeavesHelper(root, false);
	    }
	    
	    public int sumOfLeftLeavesHelper(TreeNode root, Boolean isLeftNode) {
	    	int total = 0;
	    	// base case
	    	if (root == null) {
	    		return total;
	    	}
	    	
	    	// left node
	    	int leftNodeTotal = sumOfLeftLeavesHelper(root.left, true);
	    	// right node
	    	int rightNodeTotal = sumOfLeftLeavesHelper(root.right, false);
	    	// node logic
	    	if (isLeftNode && root.left == null && root.right == null) {
	    		total += root.val;
	    	}
	    	total += leftNodeTotal + rightNodeTotal;
	    	
	    	return total;
	    }
	}

}
