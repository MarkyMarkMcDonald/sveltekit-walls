<script lang="ts">
	export let puzzleNumber;
	export let max;
</script>

<div class="container">
	<button class="switcher" disabled={$puzzleNumber <= 1} on:click={() => $puzzleNumber -= 1}>&lt;</button>
	{$puzzleNumber}
	<button class="switcher" disabled={$puzzleNumber >= max} on:click={() => $puzzleNumber += 1}>&gt;</button>
</div>

<style lang="scss">
  .container {
    display: flex;
    font-size: clamp(100%, 1rem + 3vmin, 100vmin);
    justify-content: center;
  }

  .switcher {
    font-size: clamp(100%, 1rem + 3vmin, 100vmin);
		margin-left: 8px;
    margin-right: 8px;
  }
</style>
