import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FlexiComponent from "./flexiComponent";

const PreTestimonialFlexiComponent = ({ index }) => {
  const data = useStaticQuery(graphql`query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_Flexi {
                content
                fieldGroupName               
              }
            }
          }
        }
      }
    }`);

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const fullWidthSections = sections.filter(section => {
    return (
      section.fieldGroupName === 'page_Homepagesections_Section_Flexi' ||
      section.__typename === 'WpPage_Homepagesections_Section_Flexi'
    );
  });
  const sectionToRender = fullWidthSections[index];


  return (
    <FlexiComponent data={sectionToRender}/>
  );
};

export default PreTestimonialFlexiComponent;