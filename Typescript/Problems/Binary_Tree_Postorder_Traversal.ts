import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function postorderTraversal(root: TreeNode | null): number[] {
	const helper = (root: TreeNode | null, array: number[]): number[] => {
		if (root === null) {
			return [];
		}

		// left logic
		array.concat(helper(root.left, array));
		// right logic
		array.concat(helper(root.right, array));
		// node logic
		array.push(root.val);

		return array;
	};

	return helper(root, []);
}
