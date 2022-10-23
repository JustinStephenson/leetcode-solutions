function plusOne(digits: number[]): number[] {
	let lastIndex = digits.length - 1;
	// make all 9 = 0 except the first 9
	while (digits[lastIndex] === 9 && lastIndex != 0) {
		digits[lastIndex] = 0;
		lastIndex--;
	}
	// make first 9 = 0 and append 0 to end
	if (digits[lastIndex] === 9) {
		digits[lastIndex] = 0;
		digits.push(0);
	}
	digits[lastIndex]++;

	return digits;
}
