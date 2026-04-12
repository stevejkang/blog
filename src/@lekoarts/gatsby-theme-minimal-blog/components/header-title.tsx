/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - 홈으로 돌아가기`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4], display: `flex`, alignItems: `center` }}>
        <span sx={{ fontSize: `1.2rem`, fontWeight: `normal` }}>강준영</span>
        <span sx={{ ml: `6px`, fontSize: `1.2rem`, fontWeight: `bold` }}>기술 블로그</span>
      </div>
    </Link>
  )
}

export default HeaderTitle
