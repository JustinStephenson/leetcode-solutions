function climbStairs(n: number): number {
	// recursive solution with memoization
	const memo: { [key: number]: number } = {};
	const helper = (n: number): number => {
		if (n <= 2) {
			return n;
		} else if (memo[n]) {
			return memo[n];
		} else {
			const result = helper(n - 1) + helper(n - 2);
			memo[n] = result;
			return result;
		}
	};
	return helper(n);
}
