import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ImageTextTwoCol from '../organisms/imageTextTwoCol'

const Speaker = () => {
  const data = useStaticQuery(graphql`
    query SpeakerPage {
      allWpPage(filter: { uri: { eq: "/speaker/" } }) {
        nodes {
          twoColImageText {
            title
            content
            cta {
              target
              title
              url
            }
            postCtaContent
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  const { title, content, cta, image, postCtaContent } = data.allWpPage.nodes[0].twoColImageText

  return <ImageTextTwoCol title={title} content={content} cta={cta} image={image} postCtaContent={postCtaContent} wrapperClass='lg:mb-16' imageLeft={true} />
}

export default Speaker