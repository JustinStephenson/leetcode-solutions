function diagonalSum(mat: number[][]): number {
	let sum: number = 0;
	let first: number = 0;
	let last: number = mat.length - 1;
	for (const array of mat) {
		if (first === last) {
			sum += array[first];
		} else {
			sum += array[first] + array[last];
		}
		first++;
		last--;
	}
	return sum;
}
