<script>
	export let title;
	export let value;
	export let options;
</script>

<label>
	{title}
	<select bind:value>
		{#each options as option}
			<option value={option}>{option}</option>
		{/each}
	</select>
</label>
