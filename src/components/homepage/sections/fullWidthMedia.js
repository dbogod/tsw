import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HomepageSectionFullWidth = () => {
  const data = useStaticQuery(graphql`
    query SectionFullWidth {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_FwMedia {
                intro
                mediaType
                title
                video
                video2
                colours {
                  bgColour
                  whiteText
                }
              }
            }
          }
        }
      }
    }`
  )

  console.log(data.allWpPage.nodes[0].homePageSections.section);

  return (
    <div>
      Full width media section!
    </div>
  )
}

export default HomepageSectionFullWidth;