<script lang="ts">
	import ButtonGroup from '$lib/components/atom/button/button-group.svelte';
	import { Button } from '$lib/components/atom/button/index.js';
	import { PuhuiThemeProvider, addColorModeToBody } from '$lib/components/provider/theme/index.js';
	import _ from 'lodash';

	function randomColorMode() {
		addColorModeToBody(
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
