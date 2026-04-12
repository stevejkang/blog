import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `강준영 기술 블로그`,
    siteTitleAlt: `강준영 기술 블로그`,
    siteHeadline: `강준영 기술 블로그 - @stevejkang`,
    siteUrl: `https://juneyoung.io`,
    siteDescription: `개발을 하면서 얻은 인사이트를 기록합니다.`,
    siteImage: `/banner.png`,
    siteLanguage: `ko`,
    author: `강준영`,
    authorEng: `Steve Kang`,
    authorForTwitter: `@stevejkang_`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/iam-stevejkang/`,
          },
          {
            name: `Github`,
            url: `https://github.com/stevejkang`,
          },
          {
            name: `more...`,
            url: `https://go.stevejkang.com`,
          },
        ],
        feedTitle: `강준영 기술 블로그 - 개발을 하면서 얻은 인사이트를 기록합니다.`,
        formatString: `YYYY-MM-DD`,
        showLineNumbers: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-6FCME7WKSD`],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `강준영 기술 블로그`,
        short_name: `강준영 기술 블로그`,
        description: `개발을 하면서 얻은 인사이트를 기록합니다.`,
        start_url: `/`,
        background_color: `#1a202c`,
        theme_color: `#1a202c`,
        theme_color_in_head: true,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allPost },
            }: {
              query: { allPost: IAllPost; site: { siteMetadata: ISiteMetadata } }
            }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
  allPost(sort: {date: DESC}) {
    nodes {
      title
      date(formatString: "MMMM D, YYYY")
      excerpt
      slug
    }
  }
}`,
            output: `rss.xml`,
            title: `강준영 기술 블로그 - 개발을 하면서 얻은 인사이트를 기록합니다.`,
          },
        ],
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config

interface IPostTag {
  name: string
  slug: string
}

interface IPost {
  slug: string
  title: string
  defer: boolean
  date: string
  excerpt: string
  contentFilePath: string
  html: string
  timeToRead: number
  wordCount: number
  tags: Array<IPostTag>
  banner: any
  description: string
  canonicalUrl: string
}

interface IAllPost {
  nodes: Array<IPost>
}

interface ISiteMetadata {
  siteTitle: string
  siteTitleAlt: string
  siteHeadline: string
  siteUrl: string
  siteDescription: string
  siteImage: string
  author: string
}
