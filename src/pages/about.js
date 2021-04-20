import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageHeading from "../components/pageHeading";

const About = ({ data }) => {
  const { aboutPage } = data.allWpPage.nodes[0];
  const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <Layout>
      <div className="[ max-w-screen-2xl px-4 mx-auto grid grid-cols-12 ]">
        <div className="[ col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 ]">
          <PageHeading
            title={ pageHeading.title }
            intro={ pageHeading.intro }/>
          {
            aboutPage.aboutText &&
            <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html:  aboutPage.aboutText }} />
          }
        </div>
      </div>
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
