function arrangeCoins(n: number): number {
	let count: number = 1;
	while (n > 0) {
		n = n - ++count;
	}

	return count - 1;
}
