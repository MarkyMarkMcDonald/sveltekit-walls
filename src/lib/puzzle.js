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
		const newPuzzle = [...this.puzzleData];
		const currentValue = newPuzzle[rowIndex][cellIndex];
		newPuzzle[rowIndex][cellIndex] = nextValue(currentValue);
		return new Puzzle(newPuzzle);
	}

	rows() {
		return this.puzzleData;
	}
}
