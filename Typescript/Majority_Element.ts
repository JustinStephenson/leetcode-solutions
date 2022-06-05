function majorityElement(nums: number[]): number {
	let map: Map<number, number> = new Map();
	nums.forEach((num) => {
		let val = map.get(num);
		if (val === undefined) {
			val = 0;
		}
		map.set(num, ++val);
	});
	const result = [...map.entries()].reduce((prev, curr) =>
		prev[1] > curr[1] ? prev : curr
	);

	return result[0];
}
