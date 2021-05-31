import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

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
                gatsbyImageData
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
          hero.image &&
          <GatsbyImage
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            image={hero.image.localFile.childImageSharp.gatsbyImageData}
            alt={hero.image.altText}/>
        }
        {
          hero.title &&
          <div className="[ tsw-container ]">
            <div className="[ absolute w-9/12 bottom-2/20 sm:w-7/12 lg:bottom-3/20 xl:w-6/12 ]">
              <h2>
            <span>
              {`${hero.title} `}
            </span>
              </h2>
            </div>
          </div>
        }
      </section>
    )
  }
;

export default Hero;