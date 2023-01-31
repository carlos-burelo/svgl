<script>
	import { store } from '../lib/store';
	$: copied = false;
	const closeHandler = () => {
		store.set(null);
	};
</script>

{#if $store}
	<div class="card" title={$store.title}>
		<div class="icon">
			{@html $store.data}
		</div>
		<div class="details">
			<div class="head">
				<h3 class="title">{$store.title.replace(/-/g, ' ')}</h3>
				<button class="close" on:click={closeHandler}> x </button>
			</div>
			<code>
				<span>React component</span>
				&lt;{$store.title.replace(/-/g, ' ')} /&gt;
			</code>
			<button
				class="copy"
				on:click={() => {
					navigator.clipboard.writeText($store.data);
					copied = true;
					setTimeout(() => {
						copied = false;
					}, 1000);
				}}
			>
				{#if copied}
					<span>Copiado</span>
				{:else}
					<span>Copiar</span>
				{/if}
			</button>
		</div>
	</div>
{/if}

<style>
	.card {
		position: fixed;
		bottom: 20px;
		right: 20px;
		min-width: 40%;
		min-height: 200px;
		display: grid;
		background-color: rgba(0, 0, 0, 0.88);
		backdrop-filter: blur(10px);
		border: solid 1px var(--titles);
		padding: 15px;
		grid-template-columns: 1fr 2fr;
		gap: 20px;
	}
	@media (max-width: 768px) {
		.card {
			min-width: 90%;
			left: 20px;
		}
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.details {
		display: grid;
		gap: 20px;
		align-content: space-between;
	}
	.close {
		width: 30px;
		height: 30px;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
	.close:hover {
		background-color: rgb(12, 12, 12);
	}
	.title {
		color: var(--titles);
		text-transform: capitalize;
		font-size: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
	.icon {
		font-size: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.copy {
		background-color: rgb(12, 12, 12);
		width: 100%;
		height: 50px;
		border: none;
		color: var(--titles);
		font-size: 20px;
		cursor: pointer;
		font-weight: 600;
	}

	code {
		text-transform: capitalize;
		display: grid;
	}

	span {
		color: #777;
	}
</style>
