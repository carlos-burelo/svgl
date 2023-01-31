<script>
	import Box from '../components/box.svelte';
	import Icons from '../components/icons.svelte';
	import Navbar from '../components/navbar.svelte';
	import Search from '../components/search.svelte';
	import { DATA } from '../lib/data';

	$: data = DATA;

	const debounce = (fn, delay) => {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => fn(...args), delay);
		};
	};

	const filter = debounce((e) => {
		const value = e.target.value.toLowerCase();
		data = DATA.filter((icon) => icon.title.toLowerCase().includes(value));
		console.log(data);
	}, 300);
</script>

<Navbar />
<section class="container">
	<main class="main">
		<header class="header">
			<h1 class="title">Un set de iconos gratis simple y facil de usar</h1>
			<p class="subtitle">Busca los iconos que necesitas y copialos con un solo click</p>
			<Search onKeyUpHandler={filter} />
		</header>
	</main>
	<div class="icons">
		<Icons {data} />
	</div>
	<Box />
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
