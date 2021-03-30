import { writable } from 'svelte/store';

const appKey = 'github/markymarkmcdonald/sveltekit-walls';

let storedPuzzleNumber;
if (typeof window !== 'undefined') {
	const storedString = window.localStorage.getItem(`${appKey}/puzzleNumber`);
	if (storedString) {
		storedPuzzleNumber = parseInt(storedString);
	} else {
		storedPuzzleNumber = 1;
	}
} else {
	storedPuzzleNumber = 1;
}

export const puzzleNumber = writable(storedPuzzleNumber);

puzzleNumber.subscribe(value => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem(`${appKey}/puzzleNumber`, value ? value.toString() : '1');
	}
});

