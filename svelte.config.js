import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ out: 'build', precompress: false, env: { host: '0.0.0.0', port: 3000 } })
	},
preprocess: vitePreprocess()	
};

export default config;
