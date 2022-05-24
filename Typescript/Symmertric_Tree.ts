import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function isSymmetric(root: TreeNode | null): boolean {
	if (root === null) {
		return true;
	}

	return isMirror(root.left, root.right);
}

const isMirror = (l: TreeNode | null, r: TreeNode | null): boolean => {
	if (l === null && r === null) {
		return true;
	} else if (l === null || r === null) {
		return false;
	}

	// left logic
	const leftNodes: boolean = isMirror(l.left, r.right);

	// right logic
	const rightNodes: boolean = isMirror(l.right, r.left);

	// node logic
	return l.val === r.val && leftNodes && rightNodes;
};
