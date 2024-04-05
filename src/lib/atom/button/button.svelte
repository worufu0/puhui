<script lang="ts">
	import { onMount } from 'svelte';
	import type { FocusEventHandler, MouseEventHandler } from 'svelte/elements';

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

	export let click: MouseEventHandler<HTMLButtonElement> | undefined = undefined;
	export let focus: FocusEventHandler<HTMLButtonElement> | undefined = undefined;
	export let blur: FocusEventHandler<HTMLButtonElement> | undefined = undefined;

	let shouldFluid: boolean;
	let shouldRenderIcon: boolean;
	let shouldRenderText: boolean;
	let shouldRenderBadge: boolean;
	let shouldRenderComponent: boolean;

	onMount(() => {
		shouldFluid = Boolean(fluid && !square);

		shouldRenderIcon = Boolean(
			(!_.isEmpty(icon) && !square) || (!_.isEmpty(icon) && !loading && square)
		);
		shouldRenderText = Boolean(!_.isEmpty(text) && !square);
		shouldRenderBadge = Boolean(!_.isEmpty(badge) && !square);
		shouldRenderComponent = Boolean(!_.isEmpty(icon) || !_.isEmpty(text));
	});

	const computeTabIndex = () => {
		if (disabled) return -1;
		if (!_.isNil(tabIndex)) return tabIndex;
		return undefined;
	};
	const computeBadge = () => _.split(badge, ' ')[0];
	const computeButtonClasses = () => {
		const baseClasses =
			'goodui-button flex items-center justify-center space-x-[8px] border transition-all disabled:opacity-50 disabled:opacity-50 disabled:cursor-not-allowed select-none font-[Mulish,_sans-serif] appearance-none outline-none';
		return clsx(baseClasses, {
			'w-full': shouldFluid,
			'hover:enabled:shadow-small active:enabled:shadow-inner': !floated,
			'enabled:shadow-medium hover:enabled:shadow-regular active:enabled:shadow-small': floated,
			'rounded-[4px]': !rounded,
			'rounded-full': rounded,
			'bg-transparent': _.includes(['outlined', 'outlined-dashed'], variant),
			'border-dashed': _.isEqual(variant, 'outlined-dashed'),
			'border-primary-main hover:enabled:border-primary-light active:enabled:border-primary-dark text-primary-contrast-main bg-primary-main hover:enabled:bg-primary-light active:enabled:bg-primary-dark':
				Boolean(_.isEqual(color, 'primary') && _.isEqual(variant, 'contained')),
			'border-secondary-main hover:enabled:border-secondary-light active:enabled:border-secondary-dark text-secondary-contrast-main hover:enabled:text-secondary-contrast-light active:enabled:text-secondary-contrast-dark bg-secondary-main hover:enabled:bg-secondary-light active:enabled:bg-secondary-dark':
				Boolean(_.isEqual(color, 'secondary') && _.isEqual(variant, 'contained')),
			'border-tertiary-main hover:enabled:border-tertiary-light active:enabled:border-tertiary-dark text-tertiary-contrast-main hover:enabled:text-tertiary-contrast-light active:enabled:text-tertiary-contrast-dark bg-tertiary-main hover:enabled:bg-tertiary-light active:enabled:bg-tertiary-dark':
				Boolean(_.isEqual(color, 'tertiary') && _.isEqual(variant, 'contained')),
			'border-primary-main hover:enabled:border-primary-light active:enabled:border-primary-dark text-primary-main hover:enabled:text-primary-light active:enabled:text-primary-dark':
				Boolean(
					_.includes(['primary', 'secondary'], color) &&
						_.includes(['outlined', 'outlined-dashed'], variant)
				),
			'border-tertiary-contrast-main hover:enabled:border-tertiary-contrast-light active:enabled:border-tertiary-contrast-dark text-tertiary-contrast-main hover:enabled:text-tertiary-contrast-light active:enabled:text-tertiary-contrast-dark':
				Boolean(
					_.isEqual(color, 'tertiary') && _.includes(['outlined', 'outlined-dashed'], variant)
				),
			'px-[14px] py-[10px]': Boolean(!square && _.isEqual(size, 'small')),
			'w-[38px] h-[38px] p-[10px]': Boolean(square && _.isEqual(size, 'small')),
			'px-[16px] py-[12px]': Boolean(!square && _.isEqual(size, 'medium')),
			'w-[42px] h-[42px] p-[12px]': Boolean(square && _.isEqual(size, 'medium')),
			'px-[18px] py-[14px]': Boolean(!square && _.isEqual(size, 'big')),
			'w-[46px] h-[46px] p-[14px]': Boolean(square && _.isEqual(size, 'big'))
		});
	};
	const computeIconClasses = () => {
		if (shouldRenderIcon) {
			const firstClass = _.split(icon, ' ')[0];
			if (!_.isEmpty(firstClass)) return `icofont-${firstClass} text-[16px]`;
		}
		return '';
	};
</script>

{#if shouldRenderComponent}
	<button
		title="puhui-button"
		{disabled}
		{id}
		{type}
		tabindex={computeTabIndex()}
		class={computeButtonClasses()}
		on:click={click}
		on:focus={focus}
		on:blur={blur}
	>
		{#if shouldRenderIcon}
			<i class={computeIconClasses()}></i>
		{/if}
		{#if shouldRenderText}
			<span class="font-[600] text-[14px] leading-[16px]">{text}</span>
		{/if}
		{#if shouldRenderBadge}
			<span
				class="flex items-center justify-center rounded-full bg-badge-main text-badge-contrast font-[600] text-[10px] leading-[10px] p-[3px] min-w-[16px] h-[16px]"
				>{computeBadge()}</span
			>
		{/if}
		{#if loading}
			<i class="icofont-spinner text-[16px] animate-spin-slow"></i>
		{/if}
	</button>
{/if}

<style></style>
