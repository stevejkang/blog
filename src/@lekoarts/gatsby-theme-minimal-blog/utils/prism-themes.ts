import { themes } from "prism-react-renderer"
import { themeWithCssVariables } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-utils"

const { nightOwl, nightOwlLight } = themes
const { theme: lightTheme, variables: lightThemeVars } = themeWithCssVariables(nightOwlLight)
const { theme: darkTheme, variables: darkThemeVars } = themeWithCssVariables(nightOwl)

export { lightTheme, darkTheme, lightThemeVars, darkThemeVars }
