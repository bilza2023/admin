

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BX4HV_J-.js","_app/immutable/chunks/scheduler.B0J9AolO.js","_app/immutable/chunks/each.BHmVYiWL.js","_app/immutable/chunks/index.gEw5MGyf.js"];
export const stylesheets = [];
export const fonts = [];
