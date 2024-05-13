<script>
	export let columnInfo = {};
</script>

<div class="column">
  <h6>{columnInfo.title}</h6>
  {#each columnInfo.columns as column}
  <a href="{column.path}">{column.name}</a>
  {/each}
</div>
