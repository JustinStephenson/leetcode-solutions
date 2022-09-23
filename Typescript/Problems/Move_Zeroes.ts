function moveZeroes(nums: number[]): void {
	let zeroIndex = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[zeroIndex] === 0 && nums[i] !== 0) {
			// swap values
			const temp = nums[zeroIndex];
			nums[zeroIndex] = nums[i];
			nums[i] = temp;
			zeroIndex++;
		} else if (nums[zeroIndex] !== 0 && nums[i] === 0) {
			zeroIndex = i;
		}
	}
}
