<script>
	import { store } from '../lib/store';
	export let icon;
	let title = icon.title.replace(/\s/g, '-');
</script>

<div class="icon" {title} on:click={store.set({ title, data: icon.data })}>
	{@html icon.data}
</div>

<style>
	.icon {
		width: 80px;
		height: 80px;
		border: solid 1px var(--titles);
		cursor: pointer;
		font-size: 34px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.icon:hover {
		color: var(--primary);
		border-color: var(--primary);
	}
</style>
