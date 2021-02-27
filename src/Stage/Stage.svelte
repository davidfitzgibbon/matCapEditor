<script>
	import { onMount } from "svelte";

	import { settings } from "../stores";
	import App from "./app";

	onMount(() => {
		window.sketch = new App();
		sketch.settings = $settings;
		sketch.init();
	});
</script>

<div class="stage" />
