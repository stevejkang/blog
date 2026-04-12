import * as React from "react"
import { withPrefix } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
  canonicalUrl?: string
  isArticle?: boolean
  post?: {
    title: string
    date: string
    excerpt: string
    slug: string
    timeToRead?: number
    tags?: { name: string; slug: string }[]
  }
}

const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
  canonicalUrl = ``,
  isArticle = false,
  post = null,
}: SEOProps) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    siteLanguage,
    author,
    authorForTwitter,
  } = site

  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    ogTitle: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <>
      <html lang={siteLanguage} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content={isArticle ? `article` : `website`} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:image:width" content="1828" />
      <meta property="og:image:height" content="1012" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={authorForTwitter || author} />
      <meta name="twitter:site" content={authorForTwitter || author} />
      {isArticle && post?.tags && (
        <meta name="twitter:label1" content="Tags" />
      )}
      {isArticle && post?.tags && (
        <meta name="twitter:data1" content={post.tags.map((tag) => tag.name).join(", ")} />
      )}
      {isArticle && post?.date && (
        <>
          <meta name="twitter:label2" content="Published" />
          <meta name="twitter:data2" content={new Date(post.date).toISOString()} />
        </>
      )}
      {isArticle && post?.timeToRead && (
        <>
          <meta name="twitter:label3" content="Reading time" />
          <meta name="twitter:data3" content={`${post.timeToRead} min`} />
        </>
      )}
      {isArticle && post?.date && (
        <>
          <meta property="article:published_time" content={new Date(post.date).toISOString()} />
          <meta property="article:modified_time" content={new Date(post.date).toISOString()} />
        </>
      )}
      {isArticle && (
        <meta property="article:publisher" content="https://www.facebook.com/stevejkang" />
      )}
      <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-minimal-blog" />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {isArticle && post && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            url: seo.url,
            image: seo.image,
            description: seo.description,
            author: {
              "@type": "Person",
              name: author,
            },
            datePublished: new Date(post.date).toISOString(),
            publisher: {
              "@type": "Organization",
              name: siteTitle,
              url: siteUrl,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": seo.url,
            },
          })}
        </script>
      )}
      {children}
    </>
  )
}

export default Seo
