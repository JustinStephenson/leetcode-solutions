
public class Maximum_Depth_of_Binary_Tree {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	class Solution {
	    public int maxDepth(TreeNode root) {
	        if (root == null) {
	        	return 0;
	        }
	        int leftMax = maxDepth(root.left);
	        int rightMax = maxDepth(root.right);
	        return (Math.max(leftMax, rightMax)) + 1;
	    }
	}
}
