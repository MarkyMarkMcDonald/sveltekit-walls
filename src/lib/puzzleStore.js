import InitialPuzzles from '$lib/initialPuzzles';
import Puzzle from '$lib/puzzle';
import { localStorageBacked } from '$lib/localStorageBacked';

const initialPuzzles = new InitialPuzzles();
const appKey = 'github/markymarkmcdonald/sveltekit-walls';

export const puzzleNumber = localStorageBacked({
	key: `${appKey}/currentPuzzleNumber`,
	defaultValue: 0,
	fetchTransformation: n => parseInt(n),
})

export const puzzles = localStorageBacked({
	key: `${appKey}/puzzles`,
	defaultValue: initialPuzzles.all(),
	fetchTransformation: (value) => value.map((p) => new Puzzle(p)),
	storeTransformation: (value) => value.map((p) => p.toJSON())
});
