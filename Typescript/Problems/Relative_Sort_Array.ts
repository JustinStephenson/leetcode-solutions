function relativeSortArray(arr1: number[], arr2: number[]): number[] {
	// Map each num of arr2 as key to index as value
	const orderMap = new Map<number, number>();
	const length = arr2.length;
	for (const [index, num] of arr2.entries()) {
		orderMap.set(num, index);
	}

	// sort arr1
	return arr1.sort((a, b) => {
		a = orderMap.has(a) ? orderMap.get(a)! : length + a;
		b = orderMap.has(b) ? orderMap.get(b)! : length + b;
		return a - b;
	});
}
