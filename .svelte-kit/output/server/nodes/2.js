

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CLimF05E.js","_app/immutable/chunks/scheduler.DnLb9Fkb.js","_app/immutable/chunks/each.Buk2UDII.js","_app/immutable/chunks/index.BredBVVQ.js"];
export const stylesheets = [];
export const fonts = [];
