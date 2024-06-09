import { sveltekit } from '@sveltejs/kit/vite'
// server.hmr.overlay
/** @type {import('vite').UserConfig} */
const config = {
  build: {
    target: "es2022"
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
	plugins: [
		sveltekit()
	],
	server: {
		host: '0.0.0.0',
		fs: {
			allow: ['.']
		},
		hmr: {
			overlay: false
		}
	}
};

export default config
