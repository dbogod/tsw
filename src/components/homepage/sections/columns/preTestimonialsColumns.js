import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ColumnsComponent from "./columnsComponent";

const PreTestimonialColumnsSection = ({ index }) => {
  const data = useStaticQuery(graphql`query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_Columns {
                fieldGroupName
                fwTitle
                colours {
                  bgColour
                  whiteText
                }
                column {
                  title
                  text
                  image {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(aspectRatio: 2.3, width: 500)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`);

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const fullWidthSections = sections.filter(section => {
    return (
      section.fieldGroupName === 'page_Homepagesections_Section_Columns' ||
      section.__typename === 'WpPage_Homepagesections_Section_Columns'
    );
  });
  const sectionToRender = fullWidthSections[index];


  return (
    <ColumnsComponent data={sectionToRender}/>
  );
};

export default PreTestimonialColumnsSection;