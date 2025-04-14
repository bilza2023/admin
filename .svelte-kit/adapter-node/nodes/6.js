

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/player/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.5ALfrg4w.js","_app/immutable/chunks/scheduler.B0J9AolO.js","_app/immutable/chunks/index.gEw5MGyf.js","_app/immutable/chunks/index.3rfbx_ts.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.C6xe-9lS.js","_app/immutable/chunks/index.DdvUe0Id.js","_app/immutable/chunks/getCanvasSlideImages.D4FM3-19.js","_app/immutable/chunks/CanvasPlayer.Bi7RSOSN.js","_app/immutable/chunks/each.BHmVYiWL.js","_app/immutable/chunks/getPresentationImages.CHkE84C1.js","_app/immutable/chunks/ProjectToolbar.B_wNXbsW.js"];
export const stylesheets = ["_app/immutable/assets/6.0YQbNFlR.css","_app/immutable/assets/SvelteToast.Bn1lMYWi.css","_app/immutable/assets/getPresentationImages.CYcg1EC6.css"];
export const fonts = [];
