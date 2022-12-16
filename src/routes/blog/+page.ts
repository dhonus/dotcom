/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }:any) => {
  const res = await fetch(`/api`);

  const items = await res.json();
  // turn item into array

  return {items};
}