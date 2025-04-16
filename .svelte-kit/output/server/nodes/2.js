

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CxbJ0cVs.js","_app/immutable/chunks/scheduler.Cr089OC2.js","_app/immutable/chunks/each.DWus46Wm.js","_app/immutable/chunks/index.BDtNs7vA.js"];
export const stylesheets = [];
export const fonts = [];
