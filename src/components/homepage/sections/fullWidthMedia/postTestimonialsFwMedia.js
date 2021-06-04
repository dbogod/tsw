import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FullWidthMediaComponent from "./fullWidthMediaComponent";

const PostTestimonialFwMediaSection = ({ index }) => {
  const data = useStaticQuery(graphql`query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            sectionPostTestimonials {
              ... on WpPage_Homepagesections_SectionPostTestimonials_FwMedia {
                fieldGroupName
                intro
                mediaType
                title
                video
                video2
                colours {
                  bgColour
                  whiteText
                }
                imageDesktop {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
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
      section.fieldGroupName === 'page_Homepagesections_SectionPostTestimonials_FwMedia' ||
      section.__typename === 'WpPage_Homepagesections_SectionPostTestimonials_FwMedia'
    );
  });
  const sectionToRender = fullWidthSections[index];

  return (
    <FullWidthMediaComponent data={sectionToRender}/>
  );
};

export default PostTestimonialFwMediaSection;