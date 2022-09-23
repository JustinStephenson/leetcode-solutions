function findContentChildren(g: number[], s: number[]): number {
	// children array
	g.sort((a, b) => {
		return a - b;
	});
	// cookies array
	s.sort((a, b) => {
		return a - b;
	});
	let child = 0;
	for (let cookie = 0; child < g.length && cookie < s.length; cookie++) {
		if (g[child] <= s[cookie]) {
			child++;
		}
	}

	return child;
}
