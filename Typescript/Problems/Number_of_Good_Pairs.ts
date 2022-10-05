function numIdenticalPairs(nums: number[]): number {
	const map: { [key: number]: number } = {};
	let numberOfPairs = 0;
	for (const num of nums) {
		if (!map[num]) {
			map[num] = 0;
		}
		numberOfPairs += map[num]++;
	}
	return numberOfPairs;
}
