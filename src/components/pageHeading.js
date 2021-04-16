import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const PageHeading = ({ uri }) => {
  return (
    <Layout>
      {
        aboutPage.aboutText &&
        <div className="[ content__page-heading ]">
          <h2>
            Title
          </h2>
          Intro
        </div>
      }
    </Layout>
  )
};

export const query = graphql`
query PageHeading {
  allWpPage(filter: {uri: {eq: "$uri"}}) {
    nodes {
      pageHeading {
        title
      }
    }
  }
}
`

export default PageHeading;