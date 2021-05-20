import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import { Helmet } from "react-helmet/es/Helmet";

import { fontFaceCss } from "./fontFaceCss";

const HtmlHead = ({seo}) => {
  const {
    metaDesc,
    // focuskw,
    // cornerstone,
    // fullHead,
    // metaKeywords,
    opengraphDescription,
    opengraphImage,
    opengraphTitle,
    title,
    twitterDescription,
    twitterTitle,
    twitterImage
  } = seo;

  const { wp } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
            language
          }
        }
      }
    `
  )

  const metaDescription = metaDesc || wp.generalSettings?.description
  const defaultTitle = wp.generalSettings?.title

  return (
    <Helmet>
      <html lang={wp.generalSettings?.language ?? 'en_GB'} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <style type="text/css">
        {fontFaceCss}
      </style>

      {/* SEO - General */}
      <title>{title ?? defaultTitle}</title>
      <meta name="robots" content="noindex" />
      <meta name="description"
            content={metaDescription}/>

      {/* SEO - Open Graph */}
      <meta property="og:title"
            content={opengraphTitle ?? title}/>
      <meta property="og:description"
            content={opengraphDescription ?? metaDescription}/>
      <meta property="og:image"
            content={opengraphImage ?? null}/>
      <meta property="og:type"
            content="website"/>

      {/* SEO - Twitter */}
      <meta property="twitter:card"
            content="summary"/>
      <meta property="twitter:title"
            content={twitterTitle ?? opengraphTitle ?? title}/>
      <meta property="twitter:description"
            content={twitterDescription ?? opengraphDescription ?? metaDescription}/>
      <meta property="twitter:description"
            content={twitterImage ?? opengraphImage ?? null}/>
    </Helmet>
  )
}

export default HtmlHead;