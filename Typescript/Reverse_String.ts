function reverseString(s: string[]): void {
	let endPointer: number = s.length - 1;
	for (let i = 0; i < s.length / 2; i++) {
		let temp: string = s[i];
		s[i] = s[endPointer];
		s[endPointer] = temp;
		endPointer--;
	}
}
