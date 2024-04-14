<script lang="ts" context="module">
	import './css/index.css';
	import { writable } from 'svelte/store';
	import type { PuhuiBrightness, PuhuiColor } from './types';
	import { base } from './base';
	import {
		red as lightRed,
		orange as lightOrange,
		amber as lightAmber,
		yellow as lightyellow,
		lime as lightLime,
		green as lightGreen,
		emerald as lightEmerald,
		teal as lightTeal,
		cyan as lightCyan,
		sky as lightSky,
		blue as lightBlue,
		indigo as lightIndigo,
		violet as lightViolet,
		purple as lightPurple,
		fuchsia as lightFuchsia,
		pink as lightPink,
		rose as lightRose
	} from './colors/light';
	import {
		red as darkRed,
		orange as darkOrange,
		amber as darkAmber,
		yellow as darkyellow,
		lime as darkLime,
		green as darkGreen,
		emerald as darkEmerald,
		teal as darkTeal,
		cyan as darkCyan,
		sky as darkSky,
		blue as darkBlue,
		indigo as darkIndigo,
		violet as darkViolet,
		purple as darkPurple,
		fuchsia as darkFuchsia,
		pink as darkPink,
		rose as darkRose
	} from './colors/dark';
	import { light, dark } from './brightness';

	const allTheme: {
		base: { [key: string]: string };
		brightness: { [key in PuhuiBrightness]?: { [key: string]: string } };
		color: { [key in PuhuiBrightness]: { [key in PuhuiColor]?: { [key: string]: string } } };
	} = {
		base,
		brightness: {
			light,
			dark
		},
		color: {
			light: {
				red: lightRed,
				orange: lightOrange,
				amber: lightAmber,
				yellow: lightyellow,
				lime: lightLime,
				green: lightGreen,
				emerald: lightEmerald,
				teal: lightTeal,
				cyan: lightCyan,
				sky: lightSky,
				blue: lightBlue,
				indigo: lightIndigo,
				violet: lightViolet,
				purple: lightPurple,
				fuchsia: lightFuchsia,
				pink: lightPink,
				rose: lightRose
			},
			dark: {
				red: darkRed,
				orange: darkOrange,
				amber: darkAmber,
				yellow: darkyellow,
				lime: darkLime,
				green: darkGreen,
				emerald: darkEmerald,
				teal: darkTeal,
				cyan: darkCyan,
				sky: darkSky,
				blue: darkBlue,
				indigo: darkIndigo,
				violet: darkViolet,
				purple: darkPurple,
				fuchsia: darkFuchsia,
				pink: darkPink,
				rose: darkRose
			}
		}
	};

	const defaultTheme = computeTheme();
	export const themeContext = { ...defaultTheme };
	let themeStore = writable(defaultTheme);

	function computeTheme(brightness?: PuhuiBrightness, color?: PuhuiColor) {
		return {
			...allTheme.base,
			...(!!brightness ? allTheme.brightness[brightness] : allTheme.brightness.light),
			...(!!color && !!brightness ? allTheme.color[brightness][color] : allTheme.color.light.pink)
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
