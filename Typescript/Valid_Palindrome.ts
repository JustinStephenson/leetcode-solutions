function isPalindrome(s: string): boolean {
	s = s.toLowerCase();
	s = s.replace(/[^a-zA-Z\d]/g, '');

	let result: boolean = true;
	let endPointer: number = s.length - 1;
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] !== s[endPointer]) {
			result = false;
			break;
		}
		endPointer--;
	}

	return result;
}
