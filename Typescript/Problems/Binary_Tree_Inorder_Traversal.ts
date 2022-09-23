import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function inorderTraversal(root: TreeNode | null): number[] {
	const helper = (root: TreeNode | null, array: number[]): number[] => {
		if (root === null) {
			return [];
		}

		// left logic
		array.concat(helper(root.left, array));
		// node logic
		array.push(root.val);
		// right logic
		array.concat(helper(root.right, array));

		return array;
	};

	return helper(root, []);
}
