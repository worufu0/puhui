<script lang="ts">
	import _ from 'lodash';
	import { Button, ButtonGroup, PuhuiThemeProvider, TextInput } from '$lib/components/index.js';

	function randomColorMode() {
		document.body.setAttribute(
			'bright-mode',
			_.sample([
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
			])
		);
	}
</script>

<PuhuiThemeProvider>
	<div class="flex flex-col space-y-[20px] w-[200px]" style="display: flex; width: 200px">
		<TextInput
			error
			helper="Wallet token is a very long string code receive from email"
			label="Wallet"
			placeholder="Wallet token"
			icon="wallet"
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
