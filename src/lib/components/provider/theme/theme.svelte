<script lang="ts">
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import './css/index.css';
	import type { BrightMode, ColorMode } from './types.js';
	import { brightModeStore, colorModeStore } from './store.js';
	import { addBrightModeToBody, addColorModeToBody } from './method.js';

	export let brightMode: BrightMode = 'light';
	export let colorMode: ColorMode = 'green';

	$: brightModeStore.set(brightMode);
	$: colorModeStore.set(colorMode);

	onMount(() => {
		addBrightModeToBody(brightMode);
		addColorModeToBody(colorMode);
	});
</script>

<div>
	<slot />
</div>
