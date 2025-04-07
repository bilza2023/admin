import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/CoreItemsMap.js";
import "katex";
import "howler";
/* empty css                                                          */
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { P as ProjectToolbar } from "../../../chunks/ProjectToolbar.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(ProjectToolbar, "ProjectToolbar").$$render($$result, {}, {}, {})} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
