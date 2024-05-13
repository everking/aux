<script>
	export let columnInfo = {};

</script>

<div class="dropdown">
  <button class="dropbtn">{columnInfo.title}
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <div class="header">
    </div>
    {#each columnInfo.columns as column}
    <a href="{column.path}">{column.name}</a>
    {/each}  
  </div>
</div> 