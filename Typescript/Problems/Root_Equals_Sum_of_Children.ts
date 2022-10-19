import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function checkTree(root: TreeNode | null): boolean {
	if (root === null || root.left === null || root.right === null) {
		return false;
	}
	return root.val === root.left.val + root.right.val;
}
