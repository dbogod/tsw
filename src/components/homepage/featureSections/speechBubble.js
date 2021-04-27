import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const FeatureSectionSpeechBubble = () => {
  const data = useStaticQuery(graphql`
    query FeatureSectionSpeechBubble {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            featureSectionSpeechBubble {
              content
              colours {
                whiteText
                bgColour
              }
            }
          }
        }
      }
    }`
  )

  console.log(data.allWpPage.nodes[0].homePageSections.featureSectionSpeechBubble);

  return (
    <div>
      Feature Section Speech Bubble!
    </div>
  )
}

export default FeatureSectionSpeechBubble;