function sumOddLengthSubarrays(arr: number[]): number {
	let sum: number = 0;
	// for loops
	let oddCount: number = 1;
	let oddPointer: number = 0; // always points odd num away from origin
	while (oddCount < arr.length + 1) {
		oddPointer = oddCount - 1; // index
		for (let i = 0; oddPointer < arr.length; i++) {
			for (let j = 0; j < oddCount; j++) {
				sum += arr[j + i];
			}
			oddPointer++;
		}
		oddCount += 2;
	}

	return sum;
}
