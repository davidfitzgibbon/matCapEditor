<script>
	import { settings } from "../stores";
	import materials from "../Stage/materials";
</script>

{#if $settings.material !== "basic"}
	<pre>
{JSON.stringify(materials[$settings.material],null,2)}
{materials[$settings.material].matcap}
  </pre>
{/if}
