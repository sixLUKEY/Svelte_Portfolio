<script>
	import '../app.css';
	import Navbar from './components/Navbar.svelte';
	import BackgroundImage from './images/abstract-geometric-background-shapes-texture-min1.png'
</script>

<main class="dark:bg-dark min-h-screen px-8 py-4 bg-no-repeat bg-cover" style="background-image: url({BackgroundImage});">
	<Navbar />
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>
