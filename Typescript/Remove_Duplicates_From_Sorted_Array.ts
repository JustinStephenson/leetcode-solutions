var removeDuplicates = function (nums: number[]): number {
	let sizePointer = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[sizePointer] !== nums[i]) {
			sizePointer++;

			// swap
			const temp = nums[i];
			nums[i] = nums[sizePointer];
			nums[sizePointer] = temp;
		}
	}
	return sizePointer + 1;
};
