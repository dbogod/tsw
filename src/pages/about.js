import React from "react";
import { graphql } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import Img from 'gatsby-image';

const About = ({ data }) => {
  const { aboutPage, pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        {
          aboutPage.aboutImage &&
            <div className="[ mt-6 ]">
              <Img
                fluid={aboutPage.aboutImage.localFile.childImageSharp.fluid}
                alt={aboutPage.aboutImage.altText}
              />
            </div>
        }
        {
          aboutPage.aboutText &&
          <div className="[ mt-6 ]" dangerouslySetInnerHTML={{__html:  aboutPage.aboutText}} />
        }
      </LayoutPage>
    </LayoutMaster>
  )
};

export const query = graphql`
query AboutPage {
  allWpPage(filter: {uri: {eq: "/about/"}}) {
    nodes {
      pageHeading {
        title
        intro
      }
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
}`

export default About;
