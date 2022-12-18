/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }:any) => {
  const res = await fetch(`/api?start=0&end=1`);

  const items = await res.json();
  console.log(items);

  return {items};
}
