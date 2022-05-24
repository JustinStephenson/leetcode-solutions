function rotateString(s: string, goal: string): boolean {
	if (s.length != goal.length) {
		return false;
	}
	let sPointer: number = 0;
	while (sPointer < s.length) {
		let string: string = s.substring(sPointer).concat(s.substring(sPointer, 0));
		if (string.valueOf() === goal.valueOf()) {
			return true;
		}
		sPointer++;
	}

	return false;
}
