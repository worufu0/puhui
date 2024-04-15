<script lang="ts">
	import { Button, ButtonGroup, PuhuiThemeProvider, TextInput } from '$lib';
	import type { PuhuiBrightness, PuhuiColor } from '$lib/types';

	let brightness: PuhuiBrightness;
	let color: PuhuiColor;

	function randomColorMode() {
		const brightnessList: PuhuiBrightness[] = ['light', 'dark'];
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
		const randomBrightnessIndex = Math.floor(Math.random() * brightnessList.length);
		color = colors[randomColorIndex];
		brightness = brightnessList[randomBrightnessIndex];
	}
</script>

<PuhuiThemeProvider {brightness} {color}>
	<div style="height: 1000px; padding: 20px; background-color: var(--ground-background)">
		<div style="padding: 20px; background-color: var(--ground-paper)">
			<TextInput
				disabled
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
			<ButtonGroup>
				<Button />
				<Button square icon="settings" text="Đăng tin" on:click={randomColorMode} />
				<Button
					color="secondary"
					icon="adjust"
					text="Click Me"
					badge="1"
					on:click={randomColorMode}
				/>
				<Button
					color="gradient"
					icon="adjust"
					text="Click Me"
					badge="1"
					on:click={randomColorMode}
				/>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outlined" text="Click Me" on:click={randomColorMode} />
				<Button color="secondary" variant="outlined" text="Click Me" on:click={randomColorMode} />
				<Button color="gradient" variant="outlined" text="Click Me" on:click={randomColorMode} />
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outlined-dashed" text="Click Me" on:click={randomColorMode} />
				<Button
					color="secondary"
					variant="outlined-dashed"
					text="Click Me"
					on:click={randomColorMode}
				/>
				<Button
					color="gradient"
					variant="outlined-dashed"
					text="Click Me"
					on:click={randomColorMode}
				/>
			</ButtonGroup>
		</div>
	</div>
</PuhuiThemeProvider>
