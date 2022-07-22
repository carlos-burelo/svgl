<script>
	export let icon;
	let name = icon.name.replace('.svg', '').split('-').join(' ');
</script>

<div class="icon" title={name}>
	{@html icon.content}
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
