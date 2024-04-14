import { error, redirect } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {	
		const post = await import(`../../../lib/posts/${params.post}.md`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		console.log(`Post not found: ${params.post}.`);
		const newPost = `/edit/${params.post}`;
		redirect(302, newPost);
//		error(404, err);
	}
}
