<script lang="ts">
	import _ from 'lodash';

	export let id: string | undefined = undefined;
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
</script>

<div
	{id}
	class="puhui-button-group"
	class:horizontal={_.isEqual(direction, 'horizontal')}
	class:vertical={_.isEqual(direction, 'vertical')}
>
	<slot />
</div>

<style>
	.puhui-button-group {
		display: flex;
	}
	.puhui-button-group.horizontal {
		align-items: center;
	}
	.puhui-button-group.vertical {
		flex-direction: column;
	}
	.puhui-button-group.horizontal > :global(.puhui-button:first-child) {
		border-right-width: 0px;
		border-top-left-radius: 4px;
		border-top-right-radius: 0px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 0px;
	}
	.puhui-button-group.horizontal > :global(.puhui-button:last-child) {
		border-left-width: 0px;
		border-top-left-radius: 0px;
		border-top-right-radius: 4px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 4px;
	}
	.puhui-button-group.vertical > :global(.puhui-button:first-child) {
		border-bottom-width: 0px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
	}
	.puhui-button-group.vertical > :global(.puhui-button:last-child) {
		border-top-width: 0px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		border-bottom-left-radius: 4px;
		border-bottom-right-radius: 4px;
	}
	.puhui-button-group > :global(.puhui-button:not(:first-child):not(:last-child)) {
		border-radius: 0px;
	}
</style>
