function largestAltitude(gain: number[]): number {
	let trackingNum = 0;
	let highestAltitude = 0;
	gain.forEach((num) => {
		trackingNum += num;
		if (trackingNum > highestAltitude) {
			highestAltitude = trackingNum;
		}
	});
	return highestAltitude;
}
