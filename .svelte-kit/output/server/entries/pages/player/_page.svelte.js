import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import "../../../chunks/CoreItemsMap.js";
import "katex";
/* empty css                                                   */
import "howler";
/* empty css                                                          */
import { P as ProjectToolbar } from "../../../chunks/ProjectToolbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ProjectToolbar, "ProjectToolbar").$$render($$result, {}, {}, {})} ${``}`;
});
export {
  Page as default
};
