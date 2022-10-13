import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function increasingBST(root: TreeNode | null): TreeNode | null {
	const helper = (
		root: TreeNode | null,
		tail: TreeNode | null
	): TreeNode | null => {
		if (root === null) {
			return tail;
		}
		// left logic
		const tree = helper(root.left, root);
		// node logic
		root.left = null;
		// right logic
		root.right = helper(root.right, tail);

		return tree;
	};

	return helper(root, null);
}
