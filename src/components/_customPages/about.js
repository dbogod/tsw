import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

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
                fluid {
                  ...GatsbyImageSharpFluid
                }
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
          <Img
            fluid={aboutImage.localFile.childImageSharp.fluid}
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
