import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const { allWpPage } = useStaticQuery(graphql`
  query {
    allWpPage(filter: {isFrontPage: {eq: true}}) {
      nodes {
        hero {
          title
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
  return (
    <section className="[ hero ]">
      {
        hero.title &&
        <div className="[ tsw-container ]">
          <div className="[ absolute w-9/12 bottom-2/20 sm:w-7/12 lg:bottom-3/20 lg:w-5/12 ]">
            <h2>
            <span>
              {`${hero.title} `}
            </span>
            </h2>
          </div>
        </div>
      }
      {
        hero.image &&
        <img className="[ w-full h-full object-cover ]"
             src={hero.image.localFile.childImageSharp.fluid.src}
             srcSet={hero.image.localFile.childImageSharp.fluid.srcSet}
             sizes="100vw"
             alt={hero.image.altText}/>
      }
    </section>
  )
}
;

export default Hero;