import React from "react";
import { graphql } from "gatsby";

const About = ({ data }) => {
  const { pageHeading } = data.allWpPage.nodes;

  const title = () => {
    if (pageHeading.title) {
      return (
        <h2>
          { pageHeading.title }
        </h2>
      )
    }
  }


  return (
    <section>
      { title }
    </section>
  )
}

export const query = graphql`
query About {
  allWpPage(filter: {uri: {eq: "/about/"}}) {
    nodes {
      pageHeading {
        intro
        title
      }
    }
  }
}
`
