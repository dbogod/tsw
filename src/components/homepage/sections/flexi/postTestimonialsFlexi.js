import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FlexiComponent from "./flexiComponent";

const PostTestimonialFlexiComponent = ({ index }) => {
  const data = useStaticQuery(graphql`query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            sectionPostTestimonials {
              ... on WpPage_Homepagesections_SectionPostTestimonials_Flexi {
                content
                fieldGroupName
                colours {
                  bgColour
                  whiteText
                }
              }
            }
          }
        }
      }
    }`);

  const sections = data.allWpPage.nodes[0].homePageSections.sectionPostTestimonials;
  const fullWidthSections = sections.filter(section => {
    return (
      section.fieldGroupName === 'page_Homepagesections_SectionPostTestimonials_Flexi' ||
      section.__typename === 'WpPage_Homepagesections_SectionPostTestimonials_Flexi'
    );
  });
  const sectionToRender = fullWidthSections[index];

  return (
    <FlexiComponent data={sectionToRender}/>
  );
};

export default PostTestimonialFlexiComponent;