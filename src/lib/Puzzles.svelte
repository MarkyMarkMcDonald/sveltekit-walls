<script lang="ts">
	import Solver from './Solver.svelte';
	import Stepper from './Stepper.svelte';
	import InitialPuzzles from './initialPuzzles';
	import Puzzle from './puzzle';
	import { puzzleNumber } from './puzzleStore';
	const initialPuzzles = new InitialPuzzles();


	$: puzzle = new Puzzle(initialPuzzles.get($puzzleNumber));

	function toggleOpening(rowIndex, cellIndex) {
		puzzle = puzzle.toggleOpening(rowIndex, cellIndex);
	}

	function setPuzzleNumber(n) {
		puzzleNumber.set(n);
	}
</script>

<main>
	<Solver {puzzle} {toggleOpening} />
	<Stepper max={initialPuzzles.length} {setPuzzleNumber} {puzzleNumber} />
</main>

<style lang="scss">
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: clamp(100%, 1rem + 3vw, 100vmin);
    justify-content: space-evenly;
    height: 85vh;
  }
</style>
