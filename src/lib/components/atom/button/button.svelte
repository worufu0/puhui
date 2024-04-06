<script lang="ts">
	import _ from 'lodash';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	export let disabled: boolean | undefined = undefined;
	export let loading: boolean | undefined = undefined;
	export let fluid: boolean | undefined = undefined;
	export let square: boolean | undefined = undefined;
	export let rounded: boolean | undefined = undefined;
	export let floated: boolean | undefined = undefined;
	export let tabIndex: number | undefined = undefined;
	export let id: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let badge: string | undefined = undefined;
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let color: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let variant: 'contained' | 'outlined' | 'outlined-dashed' = 'contained';
	export let size: 'small' | 'medium' | 'big' = 'medium';

	let shouldFluid: boolean;
	let shouldRenderIcon: boolean;
	let shouldRenderText: boolean;
	let shouldRenderBadge: boolean;
	let shouldRenderComponent: boolean;

	function computeTabIndex() {
		if (disabled) return -1;
		if (!_.isNil(tabIndex)) return tabIndex;
		return undefined;
	}
	function computeBadge() {
		return _.split(badge, ' ')[0];
	}
	function computeButtonClasses() {
		const baseClass = 'puhui-button';
		return clsx(baseClass, {
			fluid: shouldFluid,
			floated: floated,
			rounded: rounded,
			outlined: _.isEqual(variant, 'outlined'),
			'outlined-dashed': _.isEqual(variant, 'outlined-dashed'),
			dashed: _.isEqual(variant, 'outlined-dashed'),
			'primary-contained': Boolean(_.isEqual(color, 'primary') && _.isEqual(variant, 'contained')),
			'primary-outlined': Boolean(_.isEqual(color, 'primary') && _.isEqual(variant, 'outlined')),
			'primary-outlined-dashed': Boolean(
				_.isEqual(color, 'primary') && _.isEqual(variant, 'outlined-dashed')
			),
			'secondary-contained': Boolean(
				_.isEqual(color, 'secondary') && _.isEqual(variant, 'contained')
			),
			'secondary-outlined': Boolean(
				_.isEqual(color, 'secondary') && _.isEqual(variant, 'outlined')
			),
			'secondary-outlined-dashed': Boolean(
				_.isEqual(color, 'secondary') && _.isEqual(variant, 'outlined-dashed')
			),
			'tertiary-contained': Boolean(
				_.isEqual(color, 'tertiary') && _.isEqual(variant, 'contained')
			),
			'tertiary-outlined': Boolean(_.isEqual(color, 'tertiary') && _.isEqual(variant, 'outlined')),
			'tertiary-outlined-dashed': Boolean(
				_.isEqual(color, 'tertiary') && _.isEqual(variant, 'outlined-dashed')
			),
			small: Boolean(!square && _.isEqual(size, 'small')),
			'square-small': Boolean(square && _.isEqual(size, 'small')),
			medium: Boolean(!square && _.isEqual(size, 'medium')),
			'square-medium': Boolean(square && _.isEqual(size, 'medium')),
			big: Boolean(!square && _.isEqual(size, 'big')),
			'square-big': Boolean(square && _.isEqual(size, 'big'))
		});
	}
	function computeIconClasses() {
		if (shouldRenderIcon) {
			const firstClass = _.split(icon, ' ')[0];
			if (!_.isEmpty(firstClass)) return `puhui-button-icon icofont-${firstClass}`;
		}
		return '';
	}

	onMount(() => {
		shouldFluid = Boolean(fluid && !square);
		shouldRenderIcon = Boolean(
			(!_.isEmpty(icon) && !square) || (!_.isEmpty(icon) && !loading && square)
		);
		shouldRenderText = Boolean(!_.isEmpty(text) && !square);
		shouldRenderBadge = Boolean(!_.isEmpty(badge) && !square);
		shouldRenderComponent = Boolean(!_.isEmpty(icon) || !_.isEmpty(text));
	});
</script>

{#if shouldRenderComponent}
	<button
		title="puhui-button"
		{disabled}
		{id}
		{type}
		tabindex={computeTabIndex()}
		class={computeButtonClasses()}
		on:click
		on:focus
		on:blur
	>
		{#if shouldRenderIcon}
			<i class={computeIconClasses()}></i>
		{/if}
		{#if shouldRenderText}
			<span class="puhui-button-text">{text}</span>
		{/if}
		{#if shouldRenderBadge}
			<span class="puhui-button-badge">{computeBadge()}</span>
		{/if}
		{#if loading}
			<i class="puhui-button-spinner icofont-spinner"></i>
		{/if}
	</button>
{/if}

<style>
	.puhui-button {
		display: flex;
		align-items: center;
		justify-content: center;
		border-width: 1px;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		outline: 2px solid transparent;
		outline-offset: 2px;
		-webkit-user-select: none;
		user-select: none;
		font-family: Nunito, sans-serif;
		appearance: none;
	}
	.puhui-button:disabled {
		opacity: 50%;
		cursor: not-allowed;
	}
	.puhui-button:hover:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--small);
	}
	.puhui-button:active:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--inner);
	}
	.puhui-button > *:not(:first-child) {
		margin-left: 8px;
	}
	.puhui-button.fluid {
		width: 100%;
	}
	.puhui-button:not(.floated):hover:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--small);
	}
	.puhui-button:not(.floated):active:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--inner);
	}
	.puhui-button.floated:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--medium);
	}
	.puhui-button.floated:hover:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--regular);
	}
	.puhui-button.floated:active:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--small);
	}
	.puhui-button:not(.rounded) {
		border-radius: 4px;
	}
	.puhui-button.rounded {
		border-radius: 9999px;
	}
	.puhui-button.outlined {
		background-color: transparent;
	}
	.puhui-button.outlined-dashed {
		background-color: transparent;
	}
	.puhui-button.dashed {
		border-style: dashed;
	}
	.puhui-button.primary-contained {
		color: var(--primary-contrast-main);
		border-color: var(--primary-main);
		background-color: var(--primary-main);
	}
	.puhui-button.primary-contained:hover:enabled {
		color: var(--primary-contrast-light);
		border-color: var(--primary-light);
		background-color: var(--primary-light);
	}
	.puhui-button.primary-contained:active:enabled {
		color: var(--primary-contrast-dark);
		border-color: var(--primary-dark);
		background-color: var(--primary-dark);
	}
	.puhui-button.secondary-contained {
		color: var(--secondary-contrast-main);
		border-color: var(--secondary-main);
		background-color: var(--secondary-main);
	}
	.puhui-button.secondary-contained:hover:enabled {
		color: var(--secondary-contrast-light);
		border-color: var(--secondary-light);
		background-color: var(--secondary-light);
	}
	.puhui-button.secondary-contained:active:enabled {
		color: var(--secondary-contrast-dark);
		border-color: var(--secondary-dark);
		background-color: var(--secondary-dark);
	}
	.puhui-button.tertiary-contained {
		color: var(--tertiary-contrast-main);
		border-color: var(--tertiary-main);
		background-color: var(--tertiary-main);
	}
	.puhui-button.tertiary-contained:hover:enabled {
		color: var(--tertiary-contrast-light);
		border-color: var(--tertiary-light);
		background-color: var(--tertiary-light);
	}
	.puhui-button.tertiary-contained:active:enabled {
		color: var(--tertiary-contrast-dark);
		border-color: var(--tertiary-dark);
		background-color: var(--tertiary-dark);
	}
	.puhui-button.primary-outlined,
	.puhui-button.primary-outlined-dashed,
	.puhui-button.secondary-outlined,
	.puhui-button.secondary-outlined-dashed {
		color: var(--primary-main);
		border-color: var(--primary-main);
	}
	.puhui-button.primary-outlined:hover:enabled,
	.puhui-button.primary-outlined-dashed:hover:enabled,
	.puhui-button.secondary-outlined:hover:enabled,
	.puhui-button.secondary-outlined-dashed:hover:enabled {
		color: var(--primary-light);
		border-color: var(--primary-light);
	}
	.puhui-button.primary-outlined:active:enabled,
	.puhui-button.primary-outlined-dashed:active:enabled,
	.puhui-button.secondary-outlined:active:enabled,
	.puhui-button.secondary-outlined-dashed:active:enabled {
		color: var(--primary-dark);
		border-color: var(--primary-dark);
	}
	.puhui-button.tertiary-outlined,
	.puhui-button.tertiary-outlined-dashed {
		color: var(--tertiary-contrast-main);
		border-color: var(--tertiary-contrast-main);
	}
	.puhui-button.tertiary-outlined:hover:enabled,
	.puhui-button.tertiary-outlined-dashed:hover:enabled {
		color: var(--tertiary-contrast-light);
		border-color: var(--tertiary-contrast-light);
	}
	.puhui-button.tertiary-outlined:active:enabled,
	.puhui-button.tertiary-outlined-dashed:active:enabled {
		color: var(--tertiary-contrast-dark);
		border-color: var(--tertiary-contrast-dark);
	}
	.puhui-button.tertiary-outlined:active:enabled,
	.puhui-button.tertiary-outlined-dashed:active:enabled {
		color: var(--tertiary-contrast-dark);
		border-color: var(--tertiary-contrast-dark);
	}
	.puhui-button.small {
		padding-left: 14px;
		padding-right: 14px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.puhui-button.square-small {
		padding: 10px;
		width: 38px;
		height: 38px;
	}
	.puhui-button.medium {
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 12px;
		padding-bottom: 12px;
	}
	.puhui-button.square-medium {
		padding: 12px;
		width: 42px;
		height: 42px;
	}
	.puhui-button.big {
		padding-left: 18px;
		padding-right: 18px;
		padding-top: 14px;
		padding-bottom: 14px;
	}
	.puhui-button.square-big {
		padding: 14px;
		width: 46px;
		height: 46px;
	}
	.puhui-button-text {
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
	}
	.puhui-button-icon {
		font-size: 16px;
	}
	.puhui-button-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
		border-radius: 9999px;
		color: var(--badge-contrast);
		background-color: var(--badge-main);
		font-size: 10px;
		font-weight: 600;
		line-height: 10px;
		padding: 3px;
		min-width: 16px;
		height: 16px;
	}
	.puhui-button-spinner {
		font-size: 16px;
		animation-duration: 3000ms;
		animation-timing-function: linear;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		animation-direction: normal;
		animation-fill-mode: none;
		animation-play-state: running;
		animation-name: spin;
		animation-timeline: auto;
		animation-range-start: normal;
		animation-range-end: normal;
	}
</style>
