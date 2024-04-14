<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>

<header>
	<img alt="Auxilium" src="/images/auxilium.png" style="width:300px" />
	<MainNav />
</header>