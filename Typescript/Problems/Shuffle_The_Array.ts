function shuffle(nums: number[], n: number): number[] {
	const resultArray: Array<number> = [];
	for (let i = 0; i < nums.length / 2; i++) {
		resultArray.push(nums[i]);
		resultArray.push(nums[n++]);
	}
	return resultArray;
}
