function smallerNumbersThanCurrent(nums: number[]): number[] {
	const bucket: number[] = new Array(101).fill(0); // index 0 - 100
	const resultArray: number[] = [];
	// fill bucket where index is the number val
	for (const num of nums) {
		bucket[num]++;
	}
	// modify bucket
	let sum = 0;
	for (const index in bucket) {
		if (bucket[index] !== 0) {
			const temp = bucket[index];
			bucket[index] = sum;
			sum += temp;
		}
	}
	// fill result array
	for (const num of nums) {
		resultArray.push(bucket[num]);
	}

	return resultArray;
}
