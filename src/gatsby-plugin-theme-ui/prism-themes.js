import { themes } from "prism-react-renderer"
import { themeWithCssVariables } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-utils"

const { nightOwl, nightOwlLight } = themes
const { variables: lightThemeVars } = themeWithCssVariables(nightOwlLight)
const { variables: darkThemeVars } = themeWithCssVariables(nightOwl)

export { lightThemeVars, darkThemeVars }
