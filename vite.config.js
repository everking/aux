import { sveltekit } from '@sveltejs/kit/vite'

// server.hmr.overlay
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.']
		},
		hmr: {
			overlay: false
		}
	}
};

export default config
