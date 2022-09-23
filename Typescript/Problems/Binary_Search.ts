function search(nums: number[], target: number): number {
	let firstPointer: number = 0;
	let lastPointer: number = nums.length - 1;
	while (lastPointer - firstPointer >= 0) {
		let midPointIndex: number = Math.floor(
			lastPointer - (lastPointer - firstPointer) / 2
		);
		if (target === nums[midPointIndex]) {
			return midPointIndex;
		} else if (target < nums[midPointIndex]) {
			lastPointer = midPointIndex - 1;
		} else {
			firstPointer = midPointIndex + 1;
		}
	}

	return -1; // no match found
}
