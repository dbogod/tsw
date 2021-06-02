import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from 'react-helmet/es/Helmet';

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
        hero.image &&
        <>
          <Helmet>
            <link rel="preload"
                  as="image"
                  href="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  imagesrcset={hero.image.localFile.childImageSharp.fluid.srcSet}
                  imagesizes="100vw"/>
          </Helmet>
          <img className="[ w-full h-full object-cover ]"
               src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
               srcSet={hero.image.localFile.childImageSharp.fluid.srcSet}
               sizes="100vw"
               alt={hero.image.altText}/>
        </>
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
};

export default Hero;