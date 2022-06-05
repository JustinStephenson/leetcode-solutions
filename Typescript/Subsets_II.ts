function subsetsWithDup(nums: number[]): number[][] {
	let list: number[][] = [];
	nums.sort((a, b) => {
		return a - b;
	});

	const backtrack = (list: number[][], tempList: number[], start: number) => {
		list.push([...tempList]);
		for (let i = start; i < nums.length; i++) {
			// skip duplicates
			if (i > start && nums[i] === nums[i - 1]) {
				continue;
			}
			tempList.push(nums[i]);
			backtrack(list, tempList, i + 1);
			tempList.pop();
		}
	};

	backtrack(list, [], 0);
	return list;
}
