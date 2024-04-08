<script lang="ts">
	export let disabled: boolean | undefined = undefined;
	export let readonly: boolean | undefined = undefined;
	export let required: boolean | undefined = undefined;
	export let spellcheck: boolean | undefined = undefined;
	export let error: boolean | undefined = undefined;
	export let tabindex: number | undefined = undefined;
	export let id: string | undefined = undefined;
	export let autocomplete: string | undefined = undefined;
	export let autocapitalize: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let helper: string | undefined = undefined;
	export let type: 'text' | 'email' | 'search' | 'url' | 'password' = 'text';

	function computeTabIndex() {
		if (disabled) return -1;
		if (tabindex !== null && tabindex !== undefined) return tabindex;
		return undefined;
	}
	function computeIconClasses() {
		if (icon !== undefined && icon !== '') {
			const firstClass = icon.split(' ')[0];
			if (firstClass !== '') return `puhui-text-input-icon icofont-${firstClass}`;
		}
		return '';
	}
</script>

<div class="puhui-text-input-wrapper">
	<div class="puhui-text-input-fieldset">
		<input
			title="puhui-text-input-input"
			{disabled}
			{readonly}
			{required}
			{spellcheck}
			{id}
			{autocomplete}
			{autocapitalize}
			{name}
			{placeholder}
			{value}
			{type}
			tabindex={computeTabIndex()}
			class="puhui-text-input-input"
			class:icon={icon !== undefined && icon !== ''}
			class:label={label !== undefined && label !== ''}
			class:error
			on:input
			on:keydown
			on:keypress
			on:paste
			on:click
			on:focus
			on:blur
		/>
		{#if label !== undefined && label !== ''}
			<label for={id} class="puhui-text-input-label" class:error>{label}</label>
		{/if}
		{#if icon !== undefined && icon !== ''}
			<i class={computeIconClasses()}></i>
		{/if}
	</div>
	{#if helper !== undefined && helper !== ''}
		<span class="puhui-text-input-helper" class:error> {helper} </span>
	{/if}
</div>

<style>
	.puhui-text-input-wrapper {
		display: flex;
		flex-direction: column;
		min-width: 100px;
	}
	.puhui-text-input-wrapper > *:not(:first-child) {
		margin-top: 2px;
	}
	.puhui-text-input-fieldset {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 42px;
	}
	.puhui-text-input-input {
		width: 100%;
		height: 100%;
		background-color: transparent;
		font-family: Nunito, sans-serif;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: var(--text-primary);
		outline: 2px solid transparent;
		outline-offset: 2px;
		border-width: 1px;
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 4px;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}
	.puhui-text-input-input:disabled {
		background-color: var(--field-disabled);
		cursor: not-allowed;
	}
	.puhui-text-input-input:focus::placeholder {
		opacity: 100%;
	}
	.puhui-text-input-input[type='number']::-webkit-inner-spin-button,
	.puhui-text-input-input[type='number']::-webkit-outer-spin-button,
	.puhui-text-input-input[type='search']::-webkit-search-cancel-button,
	.puhui-text-input-input[type='search']::-webkit-search-decoration {
		appearance: none;
	}
	.puhui-text-input-input::placeholder {
		opacity: 0%;
	}
	.puhui-text-input-input::selection {
		background-color: var(--tertiary-main);
	}
	.puhui-text-input-input:not(.icon) {
		padding-right: 10px;
	}
	.puhui-text-input-input.icon {
		padding-right: 36px;
	}
	.puhui-text-input-input.label,
	.puhui-text-input-input.label:focus {
		border-top-color: transparent;
	}
	.puhui-text-input-input:not(.error) {
		border-color: var(--stroke-light);
	}
	.puhui-text-input-input:not(.error):not(:placeholder-shown) {
		border-top-color: transparent;
	}
	.puhui-text-input-input:not(.error):placeholder-shown {
		border-top-color: var(--stroke-light);
	}
	.puhui-text-input-input:not(.error):focus {
		border-top-color: transparent !important;
		border-color: var(--primary-main);
	}
	.puhui-text-input-input:not(.error)::placeholder {
		color: var(--text-tertiary);
	}
	.puhui-text-input-input.error {
		border-color: var(--error-main);
	}
	.puhui-text-input-input.error:not(:placeholder-shown) {
		border-top-color: transparent;
	}
	.puhui-text-input-input.error:placeholder-shown {
		border-top-color: var(--error-main);
	}
	.puhui-text-input-input.error:focus {
		border-top-color: transparent !important;
		border-color: var(--error-dark);
	}
	.puhui-text-input-input.error::placeholder {
		color: var(--error-main);
	}
	.puhui-text-input-label {
		position: absolute;
		left: 0px;
		top: -4.75px;
		display: flex;
		width: 100%;
		height: 100%;
		-webkit-user-select: none;
		user-select: none;
		pointer-events: none;
		font-family: Nunito, sans-serif;
		font-size: 12px;
		font-weight: 400;
		line-height: 12px;
		overflow: visible !important;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}
	.puhui-text-input-label::before,
	.puhui-text-input-label::after {
		content: '';
		height: 6px;
		margin-top: 4.75px;
		border-top-width: 1px;
		pointer-events: none;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}
	.puhui-text-input-label::before {
		width: 10px;
		margin-right: 4px;
		border-top-left-radius: 4px;
		border-left-width: 1px;
	}
	.puhui-text-input-label::after {
		width: 100%;
		margin-left: 4px;
		border-top-right-radius: 4px;
		border-right-width: 1px;
	}
	.puhui-text-input-input:placeholder-shown ~ .puhui-text-input-label {
		font-size: 14px;
		line-height: 52.5px;
	}
	.puhui-text-input-input:focus ~ .puhui-text-input-label {
		font-size: 12px;
		line-height: 12px;
	}
	.puhui-text-input-label:not(.error) {
		color: var(--text-tertiary);
	}
	.puhui-text-input-input:focus ~ .puhui-text-input-label:not(.error) {
		color: var(--primary-main);
	}
	.puhui-text-input-label:not(.error)::before,
	.puhui-text-input-label:not(.error)::after,
	.puhui-text-input-input:disabled ~ .puhui-text-input-label:not(.error)::before,
	.puhui-text-input-input:disabled:placeholder-shown ~ .puhui-text-input-label:not(.error)::before,
	.puhui-text-input-input:disabled:placeholder-shown ~ .puhui-text-input-label:not(.error)::after {
		border-color: var(--stroke-light);
	}
	.puhui-text-input-input:focus ~ .puhui-text-input-label:not(.error)::before,
	.puhui-text-input-input:focus ~ .puhui-text-input-label:not(.error)::after {
		border-color: var(--primary-main);
	}
	.puhui-text-input-label.error {
		color: var(--error-main);
	}
	.puhui-text-input-input:focus ~ .puhui-text-input-label.error {
		color: var(--error-dark);
	}
	.puhui-text-input-label.error::before,
	.puhui-text-input-label.error::after,
	.puhui-text-input-input:disabled ~ .puhui-text-input-label.error::before,
	.puhui-text-input-input:disabled:placeholder-shown ~ .puhui-text-input-label.error::before,
	.puhui-text-input-input:disabled:placeholder-shown ~ .puhui-text-input-label.error::after {
		border-color: var(--error-main);
	}
	.puhui-text-input-input:focus ~ .puhui-text-input-label.error::before,
	.puhui-text-input-input:focus ~ .puhui-text-input-label.error::after {
		border-color: var(--error-dark);
	}
	.puhui-text-input-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		color: var(--stroke-dark);
		font-size: 16px;
	}
	.puhui-text-input-input:disabled ~ .puhui-text-input-icon {
		opacity: 50%;
	}
	.puhui-text-input-helper {
		font-size: 12px;
		font-weight: 300;
		line-height: 14px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.puhui-text-input-helper:not(.error) {
		color: var(--text-tertiary);
	}
	.puhui-text-input-helper.error {
		color: var(--error-main);
	}
</style>
