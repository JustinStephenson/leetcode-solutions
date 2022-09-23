function subsets(nums: number[]): number[][] {
	let list: number[][] = [];

	const backtrack = (list: number[][], tempList: number[], start: number) => {
		list.push([...tempList]);
		for (let i = start; i < nums.length; i++) {
			tempList.push(nums[i]);
			backtrack(list, tempList, i + 1);
			tempList.pop();
		}
	};

	backtrack(list, [], 0);
	return list;
}
