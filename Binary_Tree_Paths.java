import java.util.ArrayList;
import java.util.List;

public class Binary_Tree_Paths {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	class Solution {
	    public List<String> binaryTreePaths(TreeNode root) {
	        List<String> result = new ArrayList<String>();
	        if (root == null) {
	        	return result;
	        }
	        if (root.left == null && root.right == null) {
	        	String add = "" + root.val;
	        	result.add(add);
	        	return result;
	        }
	        //left subtree call
	        List<String> leftList = binaryTreePaths(root.left);
	        //right subtree call
	        List<String> rightList = binaryTreePaths(root.right);
	        //node logic
	        for (int i = 0; i < leftList.size(); i++) {
	        	String tempString = leftList.get(i);
	        	String newString = root.val + "->";
	        	newString += tempString;
	        	result.add(newString);
	        }
	        for (int i = 0; i < rightList.size(); i++) {
	        	String tempString = rightList.get(i);
	        	String newString = root.val + "->";
	        	newString += tempString;
	        	result.add(newString);
	        }
	        return result;
	    }
	}
}
