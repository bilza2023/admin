

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DYT8pIha.js","_app/immutable/chunks/scheduler.Cr089OC2.js","_app/immutable/chunks/index.BDtNs7vA.js","_app/immutable/chunks/index.CYpG4qX5.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.C4dHwIXs.js","_app/immutable/chunks/index.BUabgXgx.js","_app/immutable/chunks/getCanvasSlideImages.D4FM3-19.js","_app/immutable/chunks/CanvasPlayer.P4nYV0X7.js","_app/immutable/chunks/each.DWus46Wm.js","_app/immutable/chunks/getPresentationImages.DDtmGhiD.js","_app/immutable/chunks/ProjectToolbar.Dlf8tu6G.js"];
export const stylesheets = ["_app/immutable/assets/6.0YQbNFlR.css","_app/immutable/assets/SvelteToast.Bn1lMYWi.css","_app/immutable/assets/getPresentationImages.CYcg1EC6.css"];
export const fonts = [];
