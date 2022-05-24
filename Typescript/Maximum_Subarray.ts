function maxSubArray(nums: number[]): number {
	let maxSub = nums[0];
	let globalMaxSub = nums[0];

	for (let i = 1; i < nums.length; i++) {
		maxSub = Math.max(maxSub + nums[i], nums[i]);
		if (maxSub > globalMaxSub) {
			globalMaxSub = maxSub;
		}
	}

	return globalMaxSub;
}
