<script>
	import Icons from '../components/icons.svelte';
	import Navbar from '../components/navbar.svelte';
	import Search from '../components/search.svelte';
	export let svgs;
	$: data = svgs;
	const filter = (e) => {
		const value = e.target.value;
		const filtered = svgs.filter((svg) => svg.name.toLowerCase().includes(value.toLowerCase()));
		data = filtered;
	};
</script>

<Navbar />
<section class="container">
	<main class="main">
		<header class="header">
			<h1 class="title">Un set de iconos gratis simple y facil de usar</h1>
			<p class="subtitle">Busca iconos los iconos que necesitas y copialos con un solo click</p>
			<Search onKeyUpHandler={filter} />
		</header>
	</main>
	<div class="icons">
		<Icons {data} />
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-inline: var(--padding);
	}
	.header {
		text-align: center;
		max-width: 80%;
		margin-inline: auto;
	}
	@media (max-width: 768px) {
		.header {
			max-width: 100%;
		}
	}
	.subtitle,
	.title {
		font-size: 35px;
		line-height: 1.6;
	}
	.subtitle {
		font-size: 20px;
	}
	.icons {
		margin-top: 30px;
	}
</style>
