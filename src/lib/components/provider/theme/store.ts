import { writable, type Writable } from 'svelte/store';
import type { BrightMode, ColorMode } from './types.js';

export const brightModeStore: Writable<BrightMode> = writable('light');
export const colorModeStore: Writable<ColorMode> = writable('green');
