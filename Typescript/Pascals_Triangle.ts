function generate(numRows: number): number[][] {
	let result: number[][] = [];
	let tempRow: number[] = [];
	for (let i = 0; i < numRows; i++) {
		tempRow.push(1);
		// skip first and last elements
		for (let j = 1; j < tempRow.length - 1; j++) {
			tempRow[j] = result[i - 1][j - 1] + result[i - 1][j];
		}
		result.push([...tempRow]);
	}

	return result;
}
