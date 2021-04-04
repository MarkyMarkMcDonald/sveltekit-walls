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

	isFilled() {
		return !this.puzzleData.flat().includes(null);
	}

	isSolved() {
		if (!this.isFilled()) {
			return false;
		}

		const badSquare = this._numberSquares().find(({ rowIndex, columnIndex, value }) => {
			let connectedLines = this._connectedLines(rowIndex, columnIndex);
			if (connectedLines !== value) {
					return true;
				}
			}
		);

		return !badSquare;
	}

	_connectedLines(rowIndex, columnIndex) {
		let goingUp = 0;
		const above = (rowIndex, columnIndex) => {
			const value = this.puzzleData[rowIndex - 1] && this.puzzleData[rowIndex - 1][columnIndex];

			return {
				isConnected: value === '|',
				rowIndex: rowIndex - 1,
				columnIndex
			};
		};

		let currentAbove = above(rowIndex, columnIndex);
		while (currentAbove.isConnected) {
			goingUp += 1;
			currentAbove = above(currentAbove.rowIndex, currentAbove.columnIndex);
		}

		let goingDown = 0;
		const below = (rowIndex, columnIndex) => {
			const value = this.puzzleData[rowIndex + 1] && this.puzzleData[rowIndex + 1][columnIndex];

			return {
				isConnected: value === '|',
				rowIndex: rowIndex + 1,
				columnIndex
			};
		};

		let currentBelow = below(rowIndex, columnIndex);
		while (currentBelow.isConnected) {
			goingDown += 1;
			currentBelow = below(currentBelow.rowIndex, currentBelow.columnIndex);
		}

		let goingLeft = 0;
		const left = (rowIndex, columnIndex) => {
			const value = this.puzzleData[rowIndex][columnIndex - 1];

			return {
				isConnected: value === '-',
				rowIndex: rowIndex,
				columnIndex: columnIndex - 1
			};
		};

		let currentLeft = left(rowIndex, columnIndex);
		while (currentLeft.isConnected) {
			goingLeft += 1;
			currentLeft = left(currentLeft.rowIndex, currentLeft.columnIndex);
		}

		let goingRight = 0;
		const right = (rowIndex, columnIndex) => {
			const value = this.puzzleData[rowIndex][columnIndex + 1];

			return {
				isConnected: value === '-',
				rowIndex: rowIndex,
				columnIndex: columnIndex + 1
			};
		};

		let currentRight = right(rowIndex, columnIndex);
		while (currentRight.isConnected) {
			goingRight += 1;
			currentRight = right(currentRight.rowIndex, currentRight.columnIndex);
		}

		return goingUp + goingDown + goingLeft + goingRight;
	}

	_numberSquares() {
		const squares = [];
		this.puzzleData.forEach((row, rowIndex) => {
			row.forEach((value, columnIndex) => {
				if (typeof value === 'number') {
					squares.push({ rowIndex, columnIndex, value });
				}
			});
		});
		return squares;
	}
}
