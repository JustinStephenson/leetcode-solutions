import { Node } from '../DataStructuresForProblems/Node';

function postorder(root: Node | null): number[] {
	if (root === null) {
		return [];
	}

	let result: number[] = [];
	// children logic -> postOrder -> Left to Right
	root.children.forEach((child) => {
		let returnChild: number[] = postorder(child);
		result = [...result, ...returnChild];
	});

	// node logic
	result = [...result, root.val];

	return result;
}
