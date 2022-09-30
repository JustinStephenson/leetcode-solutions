function mergeAlternately(word1: string, word2: string): string {
	let big: string = '';
	let small: string = '';
	let result: string = '';
	if (word1.length > word2.length) {
		big = word1;
		small = word2;
	} else {
		big = word2;
		small = word1;
	}

	for (let i = 0; i < small.length; i++) {
		result += word1[i] + word2[i];
	}
	result += big.slice(small.length, big.length);

	return result;
}
