export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\runtime\\components\\layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\chatbarber.svelte"),
	() => import("..\\..\\src\\routes\\chatbox.svelte"),
	() => import("..\\..\\src\\routes\\chatshoe.svelte"),
	() => import("..\\..\\src\\routes\\guest_house.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\kos_ungu.svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"chatbarber": [[0, 2], [1]],
	"chatbox": [[0, 3], [1]],
	"chatshoe": [[0, 4], [1]],
	"guest_house": [[0, 5], [1]],
	"kos_ungu": [[0, 7], [1]]
};