function canBeTypedWords(text: string, brokenLetters: string): number {
	// load set with broken letters
	const brokenSet: Set<string> = new Set();
	for (const letter of brokenLetters) {
		brokenSet.add(letter);
	}

	let sum: number = 0;
	let addWord: boolean = true;
	let words = text.split(' ');
	for (const word of words) {
		for (const letter of word) {
			if (brokenSet.has(letter)) {
				addWord = false;
				break;
			}
		}
		if (addWord) {
			sum++;
		}
		addWord = true;
	}

	return sum;
}
