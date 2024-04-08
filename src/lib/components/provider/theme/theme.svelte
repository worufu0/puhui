<script lang="ts">
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import './css/index.css';
	import type { BrightMode, ColorMode } from '$lib/components/types.js';

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
