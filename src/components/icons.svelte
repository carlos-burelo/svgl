<script lang="ts">
	import Card from './card.svelte';
	export let data = [];
</script>

<section class="container">
	{#each data as icon}
		<Card {icon} />
	{/each}
</section>

<style>
	.container {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(10, 1fr);
	}
	@media (max-width: 950px) {
		.container {
			grid-template-columns: repeat(8, 1fr);
		}
	}
	@media (max-width: 768px) {
		.container {
			grid-template-columns: repeat(6, 1fr);
		}
	}
	@media (max-width: 500px) {
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
