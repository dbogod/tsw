import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Cta from '../cta';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query hero {
      allWpPage(filter: {isFrontPage: { eq: true }}) {
        nodes {
          hero {
            heroBody
            heroTitle
            heroCta {
              url
              title
              target
            }
            heroImage {
              altText
              localFile {
                childImageSharp {
                  fluid(srcSetBreakpoints: [200, 350, 490]) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }`
  );

  console.log(data);

  const { hero } = data.allWpPage.nodes[0];
  if (hero.heroTitle || hero.heroBody) {
    return (
      <section>
        <div className="[ lg:min-h-80vh ]">
          <div className="[ tsw-container md:grid md:grid-cols-12 md:gap-8 ]">
            <div className="[ md:col-span-7 lg:col-span-6 ]">
              <div className="[ hero__content ]">
                <div className="[ hero__content-inner-wrapper lg:mb-8 ]">
                  {
                    hero.heroTitle &&

                    <h2
                      className="[ text-4xl py-1 text-hero-title-color text-hero-title-size xs:py-2 sm:text-hero-title-size-sm md:text-5xl md:py-0 md:mt-2 lg:mt-4 lg:text-hero-title-size-sm xl:text-hero-title-size-xl ]">
                      {hero.heroTitle}
                    </h2>

                  }
                  <div className="[ hero__body-image-wrapper relative pb-12 md:flex ]">
                    {
                      hero.heroImage &&
                      <div className="[ hero__image-wrapper hero__image-wrapper--sm ]">
                        <img src={hero.heroImage.localFile.childImageSharp.fluid.src}
                             srcSet={hero.heroImage.localFile.childImageSharp.fluid.srcSet}
                             sizes="(min-width: 640px) 470px, (min-width: 400px) 350px, 200px"
                             alt={hero.heroImage.altText}/>
                      </div>

                    }
                    {
                      hero.heroBody &&
                        <div className="[ hero__body ]">
                          <div dangerouslySetInnerHTML={{ __html: hero.heroBody }}/>
                          <Cta data={hero.heroCta} />
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="[ md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7 hidden md:block ]">
              {
                hero.heroImage &&
                <div className="[ hero__content ]">
                  <div className="[ hero__content-inner-wrapper ]">
                    <div className="[ hero__image-wrapper ml-4 ]">
                      <img src={hero.heroImage.localFile.childImageSharp.fluid.src}
                           srcSet={hero.heroImage.localFile.childImageSharp.fluid.srcSet}
                           sizes="(min-width: 1024px) 490px, (min-width: 640px) 470px, 0"
                           alt={hero.heroImage.altText}/>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;

