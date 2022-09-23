function getRow(rowIndex: number): number[] {
	let triangle: number[][] = [];
	let tempRow: number[] = [];
	let result: number[] = [];
	for (let i = 0; i < rowIndex + 1; i++) {
		tempRow.push(1);
		// skip first and last elements
		for (let j = 1; j < tempRow.length - 1; j++) {
			tempRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
		}
		triangle.push([...tempRow]);
		result = tempRow;
	}

	return result;
}
