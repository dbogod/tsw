import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import MediaTextLrSection from './mediaTextLrComponent';

const PreTestimonialsMediaTextLrSection = ({ index }) => {
  const data = useStaticQuery(graphql`
    query {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_MediaTextLr {
                fieldGroupName
                mediaCaption
                mediaSide
                mediaType
                text
                title
                videoGroup {
                  videoType
                  videoId
                }
                image {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(sizes: "(min-width: 768px) 50vw, 100vw")
                    }
                  }
                }
                cta {
                  target
                  title
                  url
                }
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

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const mediaTextLrSections = sections.filter(section => {
    return (
      section.fieldGroupName === 'page_Homepagesections_Section_MediaTextLr' ||
      section.__typename === 'WpPage_Homepagesections_Section_MediaTextLr'
    );
  });
  const sectionToRender = mediaTextLrSections[index];

  if (!sectionToRender) {
    return false;
  }

  return (
    <MediaTextLrSection data={sectionToRender} />
  );
}

export default PreTestimonialsMediaTextLrSection;