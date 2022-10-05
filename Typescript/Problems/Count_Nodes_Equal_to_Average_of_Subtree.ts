import { TreeNode } from '../DataStructuresForProblems/TreeNode';

function averageOfSubtree(root: TreeNode | null): number {
	type returnObj = {
		sum: number;
		treeCount: number;
		avgCount: number;
	};

	const helper = (root: TreeNode | null): returnObj => {
		const obj: returnObj = {
			sum: 0,
			treeCount: 0,
			avgCount: 0,
		};
		if (root === null) {
			return obj;
		}
		// left logic
		const leftObj: returnObj = helper(root.left);
		// right logic
		const rightObj: returnObj = helper(root.right);
		// node logic
		obj.sum += leftObj.sum + rightObj.sum + root.val;
		obj.treeCount += leftObj.treeCount + rightObj.treeCount + 1;
		obj.avgCount += leftObj.avgCount + rightObj.avgCount;
		if (Math.floor(obj.sum / obj.treeCount) === root.val) {
			obj.avgCount++;
		}
		return obj;
	};

	return helper(root).avgCount;
}
