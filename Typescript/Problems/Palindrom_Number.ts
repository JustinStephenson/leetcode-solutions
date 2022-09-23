function isPalindrome(x: number): boolean {
	let chars: String[] = String(x).split('');
	let endPointer = chars.length - 1;
	for (let i = 0; i < chars.length / 2; i++) {
		if (chars[i] !== chars[endPointer]) {
			return false;
		}
		endPointer--;
	}
	return true;
}

export {};
