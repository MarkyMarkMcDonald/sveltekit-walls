import Puzzle from '../../lib/puzzle';

describe('Puzzle', () => {
	describe('#isFilled', () => {
		it('true if numbers and lines', () => {
			const puzzle = new Puzzle([[0, '|'], ['-', 1]]);
			expect(puzzle.isFilled()).toBeTruthy();
		});

		it('false if any empty cells', () => {
			const puzzle = new Puzzle([[0, '|'], ['-', null]]);
			expect(puzzle.isFilled()).toBeFalsy();
		});
	});

	describe('#isSolved', () => {
		it('false if there are any unfilled squares', () => {
			const puzzle = new Puzzle([[null]]);
			expect(puzzle.isSolved()).toBeFalsy();
		});

		it('true for numbers with no connections', () => {
			const puzzle = new Puzzle([[0, 0, 0, 0]]);
			expect(puzzle.isSolved()).toBeTruthy();
		});

		it('true for numbers with the right connections', () => {
			const puzzle = new Puzzle([
				[1, '|'],
				['|', 1]
			]);
			expect(puzzle.isSolved()).toBeTruthy();
		});

		it('false for numbers with too many connections', () => {
			const puzzle = new Puzzle([
				[1, '-'],
				['|', 0]
			]);
			expect(puzzle.isSolved()).toBeFalsy();
		});

		it('false for numbers with multiple connections', () => {
			const puzzle = new Puzzle([
				[2, '-'],
				['|', 0]
			]);
			expect(puzzle.isSolved()).toBeTruthy();
		});

		it('true for some arbitrary puzzle', () => {
			const puzzle = new Puzzle([
				[3, '-', '-'],
				['|', 0, '|'],
				['-', 1, '|'],
				['|', '-', 3]
			]);
			expect(puzzle.isSolved()).toBeTruthy();
		});
	});
});
