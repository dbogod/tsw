import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

const About = () => {
  const data = useStaticQuery(graphql`
  query AboutPage {
    allWpPage(filter: {uri: {eq: "/about/"}}) {
      nodes {
        aboutPage {
          aboutText
          aboutImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }`);
  const { aboutImage, aboutText } = data.allWpPage.nodes[0].aboutPage;
  return (
    <>
      {
        aboutImage &&
        <div className="[ mt-6 ]">
          <GatsbyImage
            image={aboutImage.localFile.childImageSharp.gatsbyImageData}
            alt={aboutImage.altText}
          />
        </div>
      }
      {
        aboutText &&
        <div className="[ mt-6 ]" dangerouslySetInnerHTML={{ __html: aboutText }}/>
      }
    </>
  )
};

export default About;
