import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HomepageSectionText = () => {
  const data = useStaticQuery(graphql`
    query SectionText {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_Text {
                fieldGroupName
                text
                title
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
      Text section!
    </div>
  )
}

export default HomepageSectionText;