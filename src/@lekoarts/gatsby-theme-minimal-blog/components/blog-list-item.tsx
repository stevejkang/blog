/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb="44px">
    <TLink as={Link} to={post.slug} sx={{ fontWeight: `bold`, fontSize: [3, `1.7em`, `1.7em`], color: `text` }}>
      {post.title}
    </TLink>
    <p sx={{ m: 0, fontSize: `17px` }}>{post.description}</p>
    <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
      <time>{post.date}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
)

export default BlogListItem
