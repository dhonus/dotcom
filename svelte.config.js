//import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		alias : {
			$style: './src/style',
		}
	},
	paths: {
		// change below to your repo name
		base: dev ? "" : "/dotcom",
	},
	target: "#svelte",
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/post.svelte'
			},
		})
	]
};

export default config;
