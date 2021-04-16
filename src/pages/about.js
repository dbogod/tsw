import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageHeading from "../components/pageHeading";

const About = ({ data }) => {
  const { aboutPage } = data.allWpPage.nodes[0];
  const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <Layout>
      <PageHeading
        title={ pageHeading.title }
        intro={ pageHeading.intro }/>
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
