<script lang="ts">
	export let puzzle;
	export let toggleOpening;
</script>

<div class="fill-most-of-screen">
	{#each puzzle.rows() as row, rowIndex}
		<div class="row">
			{#each row as cell, columnIndex}
				{#if typeof cell !== 'number'}
					<div class="cell">
						<div
							class="opening"
							on:click={() => toggleOpening(rowIndex, columnIndex)}
							class:horizontal={cell === '-'}
							class:vertical={cell === '|'}
						>
							&nbsp;
						</div>
					</div>
				{:else}
					<div class="cell" class:correct={puzzle.isCorrectNumber(rowIndex, columnIndex)}>
						<div class="number">{cell}</div>
					</div>
				{/if}
			{/each}
		</div>
	{/each}
	{#if puzzle.isSolved()}
		Success!
	{:else if puzzle.isFilled()}
		Not quite...
	{/if}
</div>

<style lang="scss">
	.fill-most-of-screen {
		display: flex;
		flex-direction: column;
		height: 65vmin;
		width: 65vmin;
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
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: center;
	}

	.cell:last-child {
		border-right: 1px solid black;
	}

	.cell.correct {
		background-color: lightgrey;
	}

	.opening {
		cursor: pointer;
		flex: 1;
		position: relative;
		height: 100%;
	}

	.opening.vertical:after {
		background: black;
		content: '';
		height: 100%;
		left: 50%;
		position: absolute;
		top: 0;
		width: 2px;
	}

	.opening.horizontal:after {
		background: black;
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		height: 2px;
		width: 100%;
	}
</style>
