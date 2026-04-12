import code from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"

const customCode = {
  ...code,
  "*": {
    wordBreak: "keep-all",
    wordWrap: "break-word",
  },
  a: {
    fontWeight: "bold",
  },
  p: {
    wordBreak: "keep-all !important",
    fontSize: "17px !important",
    lineHeight: "1.8 !important",
  },
  span: {
    wordBreak: "keep-all !important",
    fontSize: "17px !important",
    lineHeight: "1.8 !important",
  },
  "code span": {
    fontSize: "16px !important",
    lineHeight: "1rem !important",
  },
}

export default customCode
