<script lang="ts">
	import { Button, ButtonGroup, PuhuiThemeProvider, TextInput } from '$lib';
	import type { PuhuiBrightness, PuhuiColor } from '$lib/types';

	let brightness: PuhuiBrightness;
	let color: PuhuiColor;

	function randomColorMode() {
		const colors: PuhuiColor[] = [
			'red',
			'orange',
			'amber',
			'yellow',
			'lime',
			'green',
			'emerald',
			'teal',
			'cyan',
			'sky',
			'blue',
			'indigo',
			'violet',
			'purple',
			'fuchsia',
			'pink',
			'rose'
		];
		const randomColorIndex = Math.floor(Math.random() * colors.length);
		color = colors[randomColorIndex];
	}
</script>

<PuhuiThemeProvider {brightness} {color}>
	<div style="width: 200px; margin-left: 20px; margin-top: 20px">
		<TextInput
			size="small"
			label="Wallet"
			placeholder="Wallet token"
			value="jal10k102y12k1k129u2s82"
		/>
		<TextInput label="Wallet" placeholder="Wallet token" value="jal10k102y12k1k129u2s82" />
		<TextInput
			size="big"
			label="Wallet"
			placeholder="Wallet token"
			value="jal10k102y12k1k129u2s82"
		/>
	</div>
	<ButtonGroup>
		<Button square icon="settings" text="Đăng tin" on:click={randomColorMode} />
		<Button color="secondary" icon="adjust" text="Click Me" badge="1" on:click={randomColorMode} />
		<Button square loading color="tertiary" text="Click Me" on:click={randomColorMode} />
	</ButtonGroup>
	<ButtonGroup>
		<Button variant="outlined" text="Click Me" on:click={randomColorMode} />
		<Button color="secondary" variant="outlined" text="Click Me" on:click={randomColorMode} />
		<Button color="tertiary" variant="outlined" text="Click Me" on:click={randomColorMode} />
	</ButtonGroup>
	<ButtonGroup>
		<Button variant="outlined-dashed" text="Click Me" on:click={randomColorMode} />
		<Button
			color="secondary"
			variant="outlined-dashed"
			text="Click Me"
			on:click={randomColorMode}
		/>
		<Button color="tertiary" variant="outlined-dashed" text="Click Me" on:click={randomColorMode} />
	</ButtonGroup>
</PuhuiThemeProvider>
