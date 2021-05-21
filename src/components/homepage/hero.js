import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const { allWpPage } = useStaticQuery(graphql`
  query {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      nodes {
        hero {
          image {
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

  const { hero } = allWpPage?.nodes[0];
  console.log(hero);
  return (
    <section>
      <img src={hero.image.localFile.childImageSharp.fluid.src}
           srcSet={hero.image.localFile.childImageSharp.fluid.srcSet}
           sizes="100vw"
           alt={hero.image.altText}/>
    </section>
  )
};

export default Hero;