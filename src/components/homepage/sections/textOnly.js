import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ColourWrapper from "../../atoms/colourWrapper";

const HomepageSectionText = ({ index }) => {
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

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const textOnlySections = sections.filter(section => section.__typename === 'WpPage_Homepagesections_Section_Text');
  const sectionToRender = textOnlySections[index];

  return (

    <ColourWrapper classNames="homepage-content text-center"
                   colours={sectionToRender.colours}>
      <div className="[ tsw-container flex justify-center ]">
        <div className="[ w-full px-4 sm:w-9/12 md:w-8/12 lg:w-7/12 ]">
          {
            sectionToRender.title &&
            <h2 className="[ mt-0 ]">
              {sectionToRender.title}
            </h2>
          }
          {
            sectionToRender.text &&
            <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html: sectionToRender.text }}/>
          }
        </div>
      </div>
    </ColourWrapper>
  )
}

export default HomepageSectionText;