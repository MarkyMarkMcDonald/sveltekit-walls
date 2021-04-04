<script lang="ts">
	import Solver from './Solver.svelte';
	import Stepper from './Stepper.svelte';
	import { puzzleNumber, puzzles } from './puzzleStore';

	$: puzzle = $puzzles[$puzzleNumber];

	function toggleOpening(rowIndex, cellIndex) {
		puzzle.toggleOpening(rowIndex, cellIndex);
		puzzles.set($puzzles);
	}
</script>

<main>
	<Solver {puzzle} {toggleOpening} />
	<Stepper max={$puzzles.length} {puzzleNumber} />
</main>

<style lang="scss">
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: clamp(10px, 1rem + 3vmin, 100vmin);
    justify-content: space-evenly;
    height: 85vh;
  }
</style>
