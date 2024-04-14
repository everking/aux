<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>

<header>
	<div>
		<img alt="Auxilium" src="/images/auxilium-new.png" style="width:350px" />
		<MainNav />
	</div>
</header>