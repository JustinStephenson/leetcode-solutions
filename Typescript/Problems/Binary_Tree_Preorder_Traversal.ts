import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function preorderTraversal(root: TreeNode | null): number[] {
	const helper = (root: TreeNode | null, array: number[]): number[] => {
		if (root === null) {
			return [];
		}

		// node logic
		array.push(root.val);
		// left logic
		array.concat(helper(root.left, array));
		// right logic
		array.concat(helper(root.right, array));

		return array;
	};

	return helper(root, []);
}
