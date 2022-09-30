function uniqueOccurrences(arr: number[]): boolean {
	const map: { [key: number]: number } = {};
	// count each occurrence using map
	arr.forEach((val) => {
		if (map[val]) {
			map[val]++;
		} else {
			map[val] = 1;
		}
	});
	// check if values of map are unique
	const set = new Set();
	for (const item in map) {
		if (set.has(map[item])) {
			return false;
		}
		set.add(map[item]);
	}
	return true;
}
