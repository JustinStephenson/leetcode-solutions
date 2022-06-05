function findMaxConsecutiveOnes(nums: number[]): number {
	let maxOnes: number = 0;
	let temp: number = 0;
	nums.forEach((num) => {
		maxOnes = Math.max(maxOnes, num === 1 ? ++temp : (temp = 0));
	});

	return maxOnes;
}
