<script lang="ts">
	import { onMount } from 'svelte';
	import './css/index.css';
	import type { BrightMode, ColorMode } from '$lib/types.js';

	export let brightMode: BrightMode = 'light';
	export let colorMode: ColorMode = 'green';

	onMount(() => {
		document.body.setAttribute('bright-mode', brightMode);
		document.body.setAttribute('color-mode', colorMode);
	});
</script>

<div>
	<slot />
</div>
