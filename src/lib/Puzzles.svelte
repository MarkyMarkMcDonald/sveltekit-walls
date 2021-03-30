<script lang="ts">
	import InitialPuzzles from './initialPuzzles';
	import Puzzle from './puzzle';

	const initialPuzzles = new InitialPuzzles();
	let puzzle = new Puzzle(initialPuzzles.get(1));

	$: rows = puzzle.rows();

	function handleClick(rowIndex, cellIndex) {
		puzzle = puzzle.toggleOpening(rowIndex, cellIndex);
	}
</script>

<div class="fill-most-of-screen">
	{#each rows as row, rowIndex}
		<div class="row">
			{#each row as cell, columnIndex}
				<div class="cell">
					{#if typeof cell !== 'number'}
						<div
							class="opening"
							on:click={() => handleClick(rowIndex, columnIndex)}
							class:horizontal={cell === '-'}
							class:vertical={cell === '|'}
						></div>
					{:else}
						<div class="number">{cell}</div>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.fill-most-of-screen {
		display: flex;
		flex-direction: column;
		height: 65vmin;
		width: 65vmin;
		font-size: clamp(100%, 1rem + 3vw, 100vmin);
	}

	.row {
		border-top: 1px solid black;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: stretch;
	}

	.row:last-child {
		border-bottom: 1px solid black;
	}

	.cell {
		align-items: center;
		border-left: 1px solid black;
		cursor: pointer;
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: center;
	}

	.cell:last-child {
		border-right: 1px solid black;
	}

	.opening {
		flex: 1;
		position: relative;
		height: 100%;
	}

	.opening.vertical:after {
		background: black;
		content: '';
		height: 90%;
		left: 50%;
		position: absolute;
		top: 5%;
		width: 2px;
	}

	.opening.horizontal:after {
    background: black;
    content: "";
    position: absolute;
    left: 5%;
    top: 50%;
    height: 2px;
    width: 90%;
	}
</style>
