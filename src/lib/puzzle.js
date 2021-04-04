const nextValue = (currentValue) => {
	switch (currentValue) {
		case "-":
			return "|";
		case "|":
			return null;
		default:
			return "-";
	}
};

export default class Puzzle {
	constructor(puzzleData) {
		this.puzzleData = puzzleData;
	}

	toggleOpening(rowIndex, cellIndex) {
		const currentValue = this.puzzleData[rowIndex][cellIndex];
		this.puzzleData[rowIndex][cellIndex] = nextValue(currentValue);
	}

	rows() {
		return this.puzzleData;
	}

	toJSON() {
		return this.puzzleData;
	}
}
