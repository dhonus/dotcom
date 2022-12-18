export const fetchMarkdownPosts = async (limit: number) => {
  const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver()
      const postPath = path.slice(11, -8)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )
  if (limit > 0){
    return allPosts.slice(0, limit)
  }
  return allPosts
}
