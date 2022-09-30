function replaceDigits(s: string): string {
	let charHold: string | null = null;

	const nextChar = (c: string, n: number) => {
		return String.fromCharCode(c.charCodeAt(0) + n);
	};

	let resultString: string = '';
	for (let char of s) {
		if (charHold === null) {
			charHold = char;
			resultString += charHold;
		} else {
			resultString += nextChar(charHold, parseInt(char));
			charHold = null;
		}
	}

	return resultString;
}
