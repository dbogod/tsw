import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const About = ({ data }) => {
  const { aboutPage } = data.allWpPage.nodes[0];
  return (
    <Layout>
      {
        aboutPage.aboutText &&
        <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html:  aboutPage.aboutText }} />
      }
    </Layout>
  )
};

export const query = graphql`
query AboutPage {
  allWpPage(filter: {uri: {eq: "/about/"}}) {
    nodes {
      aboutPage {
        aboutText
      }
    }
  }
}
`

export default About;
