<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<img alt="Auxilium" src="/images/auxilium.png" style="width:500px" />
	<br/>
	<div>
	<HamburgerMenuButton />
	<MainNav />
	</div>

</header>