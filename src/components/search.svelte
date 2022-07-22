<script>
	export let onKeyUpHandler;
</script>

<input type="search" on:keyup={onKeyUpHandler} placeholder="Busque un icono" />

<style>
	input {
		font-weight: 500;
		font-size: 17px;
	}
	@media (max-width: 768px) {
		input {
			width: 100%;
		}
	}
</style>
