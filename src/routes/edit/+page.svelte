<script>
	import Callout from '$lib/components/Callout.svelte'
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	
	let page = "";
	let disabled = "";
$:	page = page.toLowerCase().trim();
$:  disabled = (page.trim() == "")? "disabled" : "";

	const editPage = () => {
		window.open(`/edit/${page}`, "_self");
	}

	const handleEnter = (event) => {
        if (event.key === 'Enter') {
			editPage();
        }
    }
</script>
<style>
	.editButton {
		width: 100px;
	}
	#content {
		width: 800px;
		height: 300px;
	}
</style>
<svelte:head>
</svelte:head>
<input id="page" bind:value={page} on:keypress={handleEnter} placeholder="Page name to edit"/>
<button {disabled} on:click={editPage}>
	Edit Page
</button>
