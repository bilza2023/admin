

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C3oPdx1x.js","_app/immutable/chunks/scheduler.D5E9w3yW.js","_app/immutable/chunks/each.6XRftTeR.js","_app/immutable/chunks/index.XwPOAcCG.js"];
export const stylesheets = [];
export const fonts = [];
