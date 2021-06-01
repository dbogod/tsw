import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import TextOnlySection from './textOnlyComponent';

const PostTestimonialsTextOnlySection = ({ index }) => {
  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            sectionPostTestimonials {
              ... on WpPage_Homepagesections_SectionPostTestimonials_Text {
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

  const sections = data.allWpPage.nodes[0].homePageSections.sectionPostTestimonials;
  const textOnlySections = sections.filter(section => {
    return (
      section.fieldGroupName === 'page_Homepagesections_SectionPostTestimonials_Text' ||
      section.__typename === 'WpPage_Homepagesections_SectionPostTestimonials_Text'
    );
  });

  const sectionToRender = textOnlySections[index];

  if (!sectionToRender) {
    return false;
  }

  return (
    <TextOnlySection data={sectionToRender} />
  )
}

export default PostTestimonialsTextOnlySection;