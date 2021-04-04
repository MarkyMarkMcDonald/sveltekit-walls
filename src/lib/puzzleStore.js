import { writable } from 'svelte/store';
import InitialPuzzles from '$lib/initialPuzzles';
import Puzzle from '$lib/puzzle';

const initialPuzzles = new InitialPuzzles();
const appKey = 'github/markymarkmcdonald/sveltekit-walls';

let storedPuzzleNumber;
if (typeof window !== 'undefined') {
	const storedString = window.localStorage.getItem(`${appKey}/currentPuzzleNumber`);
	if (storedString) {
		storedPuzzleNumber = parseInt(storedString);
	} else {
		storedPuzzleNumber = 0;
	}
} else {
	storedPuzzleNumber = 0;
}
export const puzzleNumber = writable(storedPuzzleNumber);
puzzleNumber.subscribe(value => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(`${appKey}/currentPuzzleNumber`, value ? value.toString() : '0');
	}
});

let storedPuzzles;
if (typeof window !== 'undefined') {
	const storedPuzzlesString = window.localStorage.getItem(`${appKey}/puzzles`);
	if (storedPuzzlesString) {
		storedPuzzles = JSON.parse(storedPuzzlesString).map(p => new Puzzle(p));
	} else {
		storedPuzzles = initialPuzzles.all();
	}
} else {
	storedPuzzles = initialPuzzles.all();
}
export const puzzles = writable(storedPuzzles)
puzzles.subscribe(value => {
	if (typeof window !== 'undefined') {
		value = value || initialPuzzles.all();
		const storing = value.map(p => p.toJSON())
		window.localStorage.setItem(`${appKey}/puzzles`, JSON.stringify(storing));
	}
});
