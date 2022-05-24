public class Search_in_a_Binary_Tree {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	class Solution {
	    public TreeNode searchBST(TreeNode root, int val) {
	    	TreeNode result = root;
	    	if (root == null) {
	    		return null;
	    	}
	    	else if (val < root.val) {
	        	result = searchBST(root.left, val);
	        }
	        else if (val > root.val) {
	        	result = searchBST(root.right, val);
	        }
	        return result;
	    }
	}
}
