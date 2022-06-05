function reverseVowels(s: string): string {
	const vowels: string = 'aeiouAEIOU';
	let startPointer: number = 0;
	let endPointer: number = s.length - 1;

	while (startPointer < endPointer) {
		let startIsVowel: boolean = vowels.includes(s.charAt(startPointer));
		let endIsVowel: boolean = vowels.includes(s.charAt(endPointer));
		if (startIsVowel && endIsVowel) {
			// swap
			s =
				s.slice(0, startPointer) +
				s.charAt(endPointer) +
				s.slice(startPointer + 1, endPointer) +
				s.charAt(startPointer) +
				s.slice(endPointer + 1);
			// inc and dec after swap
			startPointer++;
			endPointer--;
		}
		if (!startIsVowel) {
			startPointer++;
		}
		if (!endIsVowel) {
			endPointer--;
		}
	}

	return s;
}

console.log(reverseVowels('JusItinA'));
