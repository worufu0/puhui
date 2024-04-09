<script lang="ts" context="module">
	import './css/index.css';
	import { writable } from 'svelte/store';
	import type { PuhuiBrightness, PuhuiColor } from './types';
	import { base } from './base';
	import {
		red,
		orange,
		amber,
		yellow,
		lime,
		green,
		emerald,
		teal,
		cyan,
		sky,
		blue,
		indigo,
		violet,
		purple,
		fuchsia,
		pink,
		rose
	} from './colors';
	import { light } from './brightness';

	const allTheme: {
		base: { [key: string]: string };
		brightness: { [key in PuhuiBrightness]?: { [key: string]: string } };
		color: { [key in PuhuiColor]?: { [key: string]: string } };
	} = {
		base,
		brightness: {
			light,
			dark: {}
		},
		color: {
			red,
			orange,
			amber,
			yellow,
			lime,
			green,
			emerald,
			teal,
			cyan,
			sky,
			blue,
			indigo,
			violet,
			purple,
			fuchsia,
			pink,
			rose
		}
	};

	const defaultTheme = computeTheme();
	export const themeContext = { ...defaultTheme };
	let themeStore = writable(defaultTheme);

	function computeTheme(brightness?: PuhuiBrightness, color?: PuhuiColor) {
		return {
			...allTheme.base,
			...(!!brightness ? allTheme.brightness[brightness] : allTheme.brightness.light),
			...(!!color ? allTheme.color[color] : allTheme.color.green)
		};
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	export let color: PuhuiColor | undefined = undefined;
	export let brightness: PuhuiBrightness | undefined = undefined;

	$: $themeStore = { ...$themeStore, ...computeTheme(brightness, color) };

	setContext(themeContext, $themeStore);
</script>

<div
	style={Object.entries({ ...$themeStore }).reduce(
		(cssVariable, [key, value]) => `${cssVariable} ${key}: ${value};`,
		''
	)}
>
	<slot theme={$themeStore} />
</div>
