<script>
	import Callout from '$lib/components/Callout.svelte'
	let fileName = "readme.md";
	let fileContent = "";
	let name = "abc";
	const updateFile = async () => {
		const data = {
		name: 'John Doe',
		age: 30,
		};
		console.log(`fileName: ${page} + ${fileContent}`)
		const res = await fetch(`/api/posts/edit/abc`, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data),
		});
		let posts = await res.json();
		console.log(posts);
	}

	export let data
	let { page } = data

	console.log("Hey " + page);
	
</script>
<style>
	#fileContent {
		width: 800px;
		height: 200px;
	}
</style>
<svelte:head>
	<title>Edit file</title>
</svelte:head>
<h1>Edit</h1>

<input placeholder="file name" bind:value={page} />
<textarea id="fileContent" bind:value={fileContent}></textarea>
<button on:click={() => updateFile()}>
	Save
</button>

Yeys
{ name }