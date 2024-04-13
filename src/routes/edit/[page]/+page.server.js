import { postsPerPage } from '$lib/config'

export const load = async ({ fetch, params }) => {
  const { page } = params;

  return { page }
  // Keeps from duplicationg the blog index route as page 1
}
