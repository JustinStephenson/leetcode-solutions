function lengthOfLastWord(s: string): number {
	let lastLength: number = 0;
	let isPrevSpace: boolean = false;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			isPrevSpace = true;
		} else {
			lastLength++;

			if (isPrevSpace) {
				lastLength = 1;
				isPrevSpace = false;
			}
		}
	}

	return lastLength;
}
