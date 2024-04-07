import type { BrightMode, ColorMode } from './types.js';

export function addBrightModeToBody(newBrightMode: BrightMode) {
	document.body.setAttribute('bright-mode', newBrightMode);
}

export function addColorModeToBody(newColorMode: ColorMode) {
	document.body.setAttribute('color-mode', newColorMode);
}
