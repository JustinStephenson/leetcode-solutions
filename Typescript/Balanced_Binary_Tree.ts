import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function isBalanced(root: TreeNode | null): boolean {
	let resultBool: boolean = true;
	const helper = (root: TreeNode | null): number => {
		if (root === null) {
			return 0;
		}

		// left node logic
		const leftNode: number = helper(root.left);

		// right node logic
		const rightNode: number = helper(root.right);

		// node
		if (Math.abs(leftNode - rightNode) > 1) {
			resultBool = false;
		}
		return leftNode > rightNode ? leftNode + 1 : rightNode + 1;
	};
	helper(root);

	return resultBool;
}
