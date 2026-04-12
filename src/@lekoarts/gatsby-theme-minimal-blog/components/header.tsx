/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import HeaderTitle from "./header-title"
import HeaderExternalLinks from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-external-links"

const Header = () => (
  <header sx={{ mb: [2, 3] }}>
    <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
      <HeaderTitle />
    </Flex>
    <HeaderExternalLinks />
  </header>
)

export default Header
