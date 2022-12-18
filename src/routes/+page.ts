/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }:any) => {
  const res = await fetch(`/api?limit=5`)
  const items = await res.json();

  return {items};
}