import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-o5vp62{text-align:center;margin-top:2rem;color:#4fc3f7}ul.svelte-o5vp62{max-width:600px;margin:2rem auto;padding-left:1rem}li.svelte-o5vp62{margin-bottom:1rem}a.svelte-o5vp62{color:#90caf9;font-weight:bold;text-decoration:none}a.svelte-o5vp62:hover{text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-o5vp62" data-svelte-h="svelte-otr9cw">Blog Index</h1> <ul class="svelte-o5vp62" data-svelte-h="svelte-1lofpby"><li class="svelte-o5vp62"><a href="/blog/backend-servies-presentation/index.html" class="svelte-o5vp62">Presentation</a></li> <li class="svelte-o5vp62"><a href="/blog/devops/installing_nginx.html" class="svelte-o5vp62">Installing NginX on Server</a></li>  </ul>`;
});
export {
  Page as default
};
