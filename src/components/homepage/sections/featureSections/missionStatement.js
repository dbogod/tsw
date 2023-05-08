import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ImageTextTwoCol from '../../../organisms/imageTextTwoCol'

const FeatureSectionMissionStatement = () => {
  const data = useStaticQuery(graphql`
    query FeatureSectionMissionStatement {
      allWpPage(filter: { isFrontPage: { eq: true } }) {
        nodes {
          homePageSections {
            featureSectionMissionStatement {
              title
              content
              cta {
                url
                title
                target
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      breakpoints: [200, 350, 490]
                      sizes: "(min-width: 640px) 470px, (min-width: 400px) 350px, 200px"
                      width: 490
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const { featureSectionMissionStatement } =
    data.allWpPage.nodes[0].homePageSections || {}
  const { title, content, cta, image } = featureSectionMissionStatement

  if (!content) {
    return null
  }

  return (
    <ImageTextTwoCol title={title} content={content} image={image} cta={cta} />
  )
}

export default FeatureSectionMissionStatement
