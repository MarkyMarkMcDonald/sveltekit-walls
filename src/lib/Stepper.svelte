<script lang="ts">
	export let puzzleNumber;
	export let max;
</script>

<div class="container">
	<button class="switcher" disabled={$puzzleNumber <= 0} on:click={() => puzzleNumber.update(n => n - 1)}>&lt;</button>
	{$puzzleNumber + 1}
	<button class="switcher" disabled={$puzzleNumber + 1 >= max} on:click={() => puzzleNumber.update(n => n + 1)}>&gt;</button>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: center;
  }

  .switcher {
    font-size: clamp(10px, 1rem + 3vmin, 100vmin);
		margin-left: 8px;
    margin-right: 8px;
  }
</style>
