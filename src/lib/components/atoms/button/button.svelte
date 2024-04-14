<script lang="ts">
	export let disabled: boolean | undefined = undefined;
	export let loading: boolean | undefined = undefined;
	export let fluid: boolean | undefined = undefined;
	export let square: boolean | undefined = undefined;
	export let rounded: boolean | undefined = undefined;
	export let floated: boolean | undefined = undefined;
	export let tabindex: number | undefined = undefined;
	export let id: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let badge: string | undefined = undefined;
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let color: 'primary' | 'secondary' | 'gradient' = 'primary';
	export let variant: 'contained' | 'outlined' | 'outlined-dashed' = 'contained';
	export let size: 'small' | 'medium' | 'big' = 'medium';

	let shouldFluid: boolean;
	let shouldRenderIcon: boolean;
	let shouldRenderText: boolean;
	let shouldRenderBadge: boolean;
	let shouldRenderComponent: boolean;

	function computeTabIndex() {
		if (disabled) return -1;
		if (tabindex !== null && tabindex !== undefined) return tabindex;
		return undefined;
	}
	function computeBadge() {
		return badge !== undefined && badge !== '' ? badge.split(' ')[0] : '';
	}
	function computeIconClasses() {
		if (icon !== undefined && icon !== '') {
			const firstClass = icon.split(' ')[0];
			if (firstClass !== '') return `puhui-button-icon icofont-${firstClass}`;
		}
		return '';
	}

	$: shouldFluid = !!fluid && !square;
	$: shouldRenderIcon =
		(icon !== undefined && icon !== '' && !square) ||
		(icon !== undefined && icon !== '' && !loading && !!square);
	$: shouldRenderText = text !== undefined && text !== '' && !square;
	$: shouldRenderBadge = badge !== undefined && badge !== '' && !square;
	$: shouldRenderComponent =
		(icon !== undefined && icon !== '') || (text !== undefined && text !== '');
</script>

{#if shouldRenderComponent}
	<button
		title="puhui-button"
		{disabled}
		{id}
		{type}
		tabindex={computeTabIndex()}
		class="puhui-button"
		class:fluid={shouldFluid}
		class:floated
		class:rounded
		class:outlined={variant === 'outlined'}
		class:outlined-dashed={variant === 'outlined-dashed'}
		class:dashed={variant === 'outlined-dashed'}
		class:primary-contained={color === 'primary' && variant === 'contained'}
		class:primary-outlined={color === 'primary' && variant === 'outlined'}
		class:primary-outlined-dashed={color === 'primary' && variant === 'outlined-dashed'}
		class:secondary-contained={color === 'secondary' && variant === 'contained'}
		class:secondary-outlined={color === 'secondary' && variant === 'outlined'}
		class:secondary-outlined-dashed={color === 'secondary' && variant === 'outlined-dashed'}
		class:gradient-contained={color === 'gradient' && variant === 'contained'}
		class:gradient-outlined={color === 'gradient' && variant === 'outlined'}
		class:gradient-outlined-dashed={color === 'gradient' && variant === 'outlined-dashed'}
		class:small={!square && size === 'small'}
		class:square-small={!!square && size === 'small'}
		class:medium={!square && size === 'medium'}
		class:square-medium={!!square && size === 'medium'}
		class:big={!square && size === 'big'}
		class:square-big={!!square && size === 'big'}
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
		border-radius: 4px;
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
	.puhui-button.floated:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--medium);
	}
	.puhui-button.floated:hover:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--regular);
	}
	.puhui-button.floated:active:enabled {
		box-shadow: var(--ring-offset-shadow, 0 0 #0000), var(--ring-shadow, 0 0 #0000), var(--small);
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
		border-color: var(--primary-light);
		background-color: var(--primary-light);
	}
	.puhui-button.primary-contained:active:enabled {
		border-color: var(--primary-dark);
		background-color: var(--primary-dark);
	}
	.puhui-button.secondary-contained {
		color: var(--secondary-contrast-main);
		border-color: var(--secondary-main);
		background-color: var(--secondary-main);
	}
	.puhui-button.secondary-contained:hover:enabled {
		border-color: var(--secondary-light);
		background-color: var(--secondary-light);
	}
	.puhui-button.secondary-contained:active:enabled {
		border-color: var(--secondary-dark);
		background-color: var(--secondary-dark);
	}
	.puhui-button.gradient-contained {
		color: var(--primary-contrast-main);
		border-color: transparent;
		background-image: linear-gradient(
			to right,
			var(--primary-dark) 0%,
			var(--primary-light) 51%,
			var(--primary-dark) 100%
		);
		background-size: 200% auto;
	}
	.puhui-button.gradient-contained:hover:enabled {
		background-position: right;
	}
	.puhui-button.primary-outlined,
	.puhui-button.primary-outlined-dashed,
	.puhui-button.secondary-outlined,
	.puhui-button.secondary-outlined-dashed,
	.puhui-button.gradient-outlined,
	.puhui-button.gradient-outlined-dashed {
		color: var(--primary-main);
		border-color: var(--primary-main);
	}
	.puhui-button.primary-outlined:hover:enabled,
	.puhui-button.primary-outlined-dashed:hover:enabled,
	.puhui-button.secondary-outlined:hover:enabled,
	.puhui-button.secondary-outlined-dashed:hover:enabled,
	.puhui-button.gradient-outlined:hover:enabled,
	.puhui-button.gradient-outlined-dashed:hover:enabled {
		color: var(--primary-light);
		border-color: var(--primary-light);
	}
	.puhui-button.primary-outlined:active:enabled,
	.puhui-button.primary-outlined-dashed:active:enabled,
	.puhui-button.secondary-outlined:active:enabled,
	.puhui-button.secondary-outlined-dashed:active:enabled,
	.puhui-button.gradient-outlined:active:enabled,
	.puhui-button.gradient-outlined-dashed:active:enabled {
		color: var(--primary-dark);
		border-color: var(--primary-dark);
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
