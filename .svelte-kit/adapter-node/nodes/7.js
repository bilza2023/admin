

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/syllabus/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.Dhzoy2aD.js","_app/immutable/chunks/scheduler.DnLb9Fkb.js","_app/immutable/chunks/index.BredBVVQ.js"];
export const stylesheets = [];
export const fonts = [];
