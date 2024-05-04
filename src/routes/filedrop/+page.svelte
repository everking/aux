<script>
  import { FileDrop } from 'svelte-droplet'
	let droppedFiles = [];
  let fileContents = '';
  
  async function handleFiles(files) {
		droppedFiles = files
    console.log(`Iron clad: ${files[0].name} + ${files[0].size} + ${JSON.stringify(files[0])}`);
    fileContents = await readFileContents(files[0]);
    console.log(`fileContents: ${fileContents}`);
  }
  async function readFileContents(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
</script>
<FileDrop {handleFiles} let:droppable>
  <div class="zone" class:droppable>Select or drop files here</div>
</FileDrop>

{#each droppedFiles as file}
  {file.name}
{/each}

<style>
	.zone {
    background-color: #eeeeee;
		padding: 30px;
		border: 2px solid #dddddd;
	}
	.droppable {
		border-color: #1f79ff;
	}
</style>