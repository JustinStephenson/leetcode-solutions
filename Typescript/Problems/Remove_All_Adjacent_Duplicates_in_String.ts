function removeDuplicatesInString(s: string): string {
	let resultString: string = '';
	for (const char of s) {
		let size = resultString.length;
		if (size > 0 && resultString.charAt(size - 1) === char) {
			resultString =
				resultString.substring(0, size - 1) + resultString.substring(size);
		} else {
			resultString += char;
		}
	}
	return resultString;
}
