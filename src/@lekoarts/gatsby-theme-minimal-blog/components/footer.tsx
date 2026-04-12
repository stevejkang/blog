/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
        {` `}
        Theme from&nbsp;
        <Link
          aria-label="Link to theme"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
          target="_blank"
        >
          here.
        </Link>
      </div>
      <div>
        <Link
          aria-label="Mail to Steve Kang"
          href="https://mailhide.io/e/0j4e5OLx"
          target="_blank"
        >
          📧 메일 보내기
        </Link>
      </div>
    </footer>
  )
}

export default Footer
