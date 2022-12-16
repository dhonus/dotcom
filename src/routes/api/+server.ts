import { fetchMarkdownPosts } from '$lib/extracter'
import { json } from '@sveltejs/kit'

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sorted = allPosts.sort((first: any, second: any) => {
    let diff = new Date(first.meta.date).getTime() - new Date(second.meta.date).getTime();
    return diff;
  }).reverse();

  return json(sorted)
}