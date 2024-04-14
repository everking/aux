<script>
	import Callout from '$lib/components/Callout.svelte'
	import { json } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	
	let content = "";
	let name = "";
	const getFile = async () => {
		const response = await fetch(`/api/posts/edit/${page}`);
		const data = await response.json();
		console.log(`data: ${JSON.stringify(data, null, 2)}`);
		content = data.data;
		console.log(JSON.stringify(content, null,2));
		return json(data);
	}

	const updateFile = async () => {
		const data = {
			page,
			content
		};
		console.log(`data: ${JSON.stringify(data, null, 2)}`)
		
		const res = await fetch(`/api/posts/edit/${page}`, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		});
		let posts = await res.json();
		console.log(JSON.stringify(posts, null, 2));
	}

	export let data
	let { page } = data

	onMount(() => {
		/* Load file if exists. */
		getFile();
	});
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
	<title>Edit file</title>
</svelte:head>
<h3>Edit "{page}"</h3>
<a href="/article/{page}" target="aux_view">View Page</a> | <a href="https://www.markdownguide.org/cheat-sheet/" target="markdown_view">Markdown Cheat Sheet</a>
<textarea id="content" bind:value={content}></textarea>
<button class="editButton" on:click={() => updateFile()}>
	Save
</button>
