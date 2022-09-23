function maxArea(height: number[]): number {
	let leftPointer = 0;
	let rightPointer = height.length - 1;
	let maxArea = 0;

	while (leftPointer < rightPointer) {
		const minHeight = Math.min(height[leftPointer], height[rightPointer]);
		maxArea = Math.max(maxArea, minHeight * (rightPointer - leftPointer));
		if (height[leftPointer] > height[rightPointer]) {
			rightPointer--;
		} else if (height[leftPointer] < height[rightPointer]) {
			leftPointer++;
		} else {
			rightPointer--;
			leftPointer++;
		}
	}

	return maxArea;
}
