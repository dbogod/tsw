import React from "react";
import { graphql } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";

const About = ({ data }) => {
  const { aboutPage, pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        {
          aboutPage.aboutText &&
          <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html:  aboutPage.aboutText }} />
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
      }
    }
  }
}
`

export default About;
