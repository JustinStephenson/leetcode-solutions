import java.util.List;
import java.util.ArrayList;

public class All_Elements_in_Two_Binary_Search_Trees {
	public class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;
		TreeNode(int x) { val = x; }
	}
	
	class Solution {
	    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
	        List<Integer> result = new ArrayList<Integer>();
	        List<Integer> treeList1 = new ArrayList<Integer>();
	        List<Integer> treeList2 = new ArrayList<Integer>();
	        findList(root1, treeList1);
	        findList(root2, treeList2);
	        result = merge(treeList1, treeList2);
	        return result;
	    }
	    
	    public void findList(TreeNode root, List<Integer> list) {
	    	if (root == null) {
	    		return;
	    	}
	    	//Left sub-tree
	    	findList(root.left, list);
	    	//Node logic
	    	list.add(root.val);
	    	//Right sub-tree
	    	findList(root.right, list);
	    }
	    
	    public List<Integer> merge(List<Integer> list1, List<Integer> list2) {
	    	List<Integer> result = new ArrayList<Integer>();
	    	int p1 = 0;	//pointer for list 1
	    	int p2 = 0;	//pointer for list 2
	    	
	    	while (p1 < list1.size() && p2 < list2.size()) {
	    		int value1 = list1.get(p1);
	    		int value2 = list2.get(p2);
	    		if (value1 < value2) {
	    			result.add(value1);
	    			p1++;
	    		}
	    		else {
	    			result.add(value2);
	    			p2++;
	    		}
	    	}
	    	
	    	while (p1 != list1.size()) {
	    		result.add(list1.get(p1));
	    		p1++;
	    	}
	    	while (p2 != list2.size()) {
	    		result.add(list2.get(p2));
	    		p2++;
	    	}
	    	return result;
	    }
	}
}
