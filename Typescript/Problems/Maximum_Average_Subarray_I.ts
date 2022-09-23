function findMaxAverage(nums: number[], k: number): number {
	let maxAvgSub = nums[0];
	let globalMaxAvgSub = nums[0];

	for (let i = 1; i < k; i++) {
		maxAvgSub = Math.max(maxAvgSub + nums[i], nums[i]);
		globalMaxAvgSub = Math.max(globalMaxAvgSub, maxAvgSub);
	}

	return globalMaxAvgSub;
}
