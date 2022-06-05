import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (root === null) {
		return false;
	}

	const helper = (root: TreeNode | null, total: number): boolean => {
		if (root === null) {
			return false;
		}

		// node logic
		let totalValue = total + root.val;
		if (totalValue === targetSum && root.left === null && root.right === null) {
			return true;
		}

		// left logic
		const leftBool = helper(root.left, totalValue);
		// right logic
		const rightBool = helper(root.right, totalValue);

		return leftBool || rightBool;
	};

	return helper(root, 0);
}
