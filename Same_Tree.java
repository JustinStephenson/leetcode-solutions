
public class Same_Tree {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	class Solution {
		public boolean isSameTree(TreeNode p, TreeNode q) {
	        if (p == null && q == null) {
	        	return true;
	        }
	        else if (p == null && q != null) {
	        	return false;
	        }
	        else if (p != null && q == null) {
	        	return false;
	        }
	        boolean leftTree = isSameTree(p.left, q.left);
	        boolean rightTree = isSameTree(p.right, q.right);
	        if (p.val == q.val && leftTree && rightTree) {
	        	return true;
	        }
	        else {
	        	return false;
	        }
	    }
	}
}
