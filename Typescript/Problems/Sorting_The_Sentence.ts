function sortSentence(s: string): string {
	const resultArray: string[] = new Array(s.length);
	let wordBuilder: string = '';
	for (const word of s) {
		if (!isNaN(+word)) {
			resultArray[+word - 1] = wordBuilder;
			wordBuilder = '';
		}
		if (word !== ' ') {
			wordBuilder += word;
		}
	}

	return resultArray.join(' ').trim();
}
