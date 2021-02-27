<script>
	import { settings } from "../stores";
	import materials from "../Stage/materials";
	import Select from "./Select.svelte";
	import MaterialView from "./MaterialView.svelte";

	const shapeOptions = ["box", "sphere", "torus"];
	$settings.shape = shapeOptions[2];

	const materialOptions = [];
	for (const material in materials) materialOptions.push(material);
	$settings.material = materialOptions[1];
</script>

<div class="settings">
	<h1>MatCap Generator</h1>

	<Select
		title="Shape Options"
		bind:value={$settings.shape}
		options={shapeOptions}
	/>

	<Select
		title="Material Options"
		bind:value={$settings.material}
		options={materialOptions}
	/>

	<MaterialView />

	<pre>
<!-- {JSON.stringify($settings, null, 2)} -->
</pre>
</div>

<style>
	.settings {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 350px;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 0 1rem;
		pointer-events: none;
	}
	:global(.settings > *) {
		pointer-events: initial;
	}
</style>
