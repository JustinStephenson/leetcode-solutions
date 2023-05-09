function interpret(command: string): string {
	let returnString: string = '';
	for (let i = 0; i < command.length; i++) {
		if (command[i] === '(') {
			if (command[i + 1] === ')') {
				returnString += 'o';
				i++;
			} else {
				returnString += 'al';
				i = i + 3;
			}
		} else {
			returnString += 'G';
		}
	}
	return returnString;
}
