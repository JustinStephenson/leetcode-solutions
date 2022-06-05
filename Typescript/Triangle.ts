function minimumTotal(triangle: number[][]): number {
	// going for a bottom to top solution
	let minTotal: number[] = Array(triangle.length + 1).fill(0);
	for (let i = triangle.length - 1; i >= 0; i--) {
		for (let j = 0; j < triangle[i].length; j++) {
			minTotal[j] = Math.min(minTotal[j], minTotal[j + 1]) + triangle[i][j];
		}
	}

	return minTotal[0];
}
