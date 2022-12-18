import { fetchMarkdownPosts } from '$lib/extracter'
import { json } from '@sveltejs/kit'
import { page } from '$app/stores';

export const GET = async ({url}:any) => {
  const limit = url.searchParams.get('limit');
  if (limit === null) {
    const allPosts = await fetchMarkdownPosts(0)
    const sorted = allPosts.sort((first: any, second: any) => {
      let diff = new Date(first.meta.date).getTime() - new Date(second.meta.date).getTime();
      return diff;
    }).reverse();

    return json(sorted)
  }
  else {
    const allPosts = await fetchMarkdownPosts(limit)
    const sorted = allPosts.sort((first: any, second: any) => {
      let diff = new Date(first.meta.date).getTime() - new Date(second.meta.date).getTime();
      return diff;
    }).reverse();

    return json(sorted)
  }


}