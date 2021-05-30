import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Cta from '../../molecules/cta';

const FeatureSectionMissionStatement = () => {
  const data = useStaticQuery(graphql`
  query FeatureSectionMissionStatement {
    allWpPage(filter: {isFrontPage: { eq: true }}) {
      nodes {
        homePageSections {
          featureSectionMissionStatement {
            title
            content
            cta {
              url
              title
              target
            }
            image {
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
    }
  }`
  );
  const { featureSectionMissionStatement } = data.allWpPage.nodes[0].homePageSections || {};
  const { title, content, cta, image } = featureSectionMissionStatement;
  if (title || content) {
    return (
      <section>
        <div className="[ homepage-content homepage-content--mission-statement ]">
          <div className="[ tsw-container md:grid md:grid-cols-12 md:gap-8 ]">
            <div className="[ md:col-span-7 lg:col-span-6 ]">
              <div className="[ mission-statement__content ]">
                <div className="[ mission-statement__content-inner-wrapper lg:mb-8 ]">
                  <div className="[ mission-statement__body-image-wrapper relative pb-12 md:flex ]">
                    {
                      image &&
                      <div className="[ mission-statement__image-wrapper mission-statement__image-wrapper--sm ]">
                        <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                             srcSet={image.localFile.childImageSharp.fluid.srcSet}
                             sizes="(min-width: 640px) 470px, (min-width: 400px) 350px, 200px"
                             alt={image.altText}/>
                      </div>
                    }
                    {
                      content &&
                      <div className="[ mission-statement__body ]">
                        {
                          title &&
                          <h2>{title}</h2>
                        }
                        <div className="[ mt-4 ]"
                             dangerouslySetInnerHTML={{ __html: content }}/>
                        <Cta data={cta}/>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="[ md:col-span-5 md:col-start-8 lg:col-span-6 lg:col-start-7 hidden md:block ]">
              {
                image &&
                <div className="[ mission-statement__content ]">
                  <div className="[ mission-statement__content-inner-wrapper ]">
                    <div className="[ mission-statement__image-wrapper ml-4 ]">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                           srcSet={image.localFile.childImageSharp.fluid.srcSet}
                           sizes="(min-width: 1024px) 490px, (min-width: 640px) 470px, 0"
                           alt={image.altText}/>
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

export default FeatureSectionMissionStatement;

