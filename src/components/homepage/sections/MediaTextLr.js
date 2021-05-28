import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ColourWrapper from "../../atoms/colourWrapper";
import Video from '../../molecules/video';
import Cta from '../../molecules/cta';

const HomepageSectionMediaTextLr = ({ index }) => {
  const data = useStaticQuery(graphql`
    query SectionMediaTextLr {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_MediaTextLr {
                mediaCaption
                mediaSide
                mediaType
                text
                title
                video
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
                cta {
                  target
                  title
                  url
                }
                colours {
                  bgColour
                  whiteText
                }
              }
            }
          }
        }
      }
    }`);

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const mediaTextLrSections = sections.filter(section => section.__typename === 'WpPage_Homepagesections_Section_MediaTextLr');
  const sectionToRender = mediaTextLrSections[index];
  const isVideo = sectionToRender.mediaType === 'video';

  return (
    <ColourWrapper
      classNames={`[ homepage-content homepage__content--media-text ${sectionToRender.mediaSide === 'right' ? 'homepage__content--media-text-right' : ''} ]`}
      colours={sectionToRender.colours}>
      <div className="[ tsw-container ]">
        {
          sectionToRender.title &&
          <h2 className="[ mt-0 text-center ]">
            {sectionToRender.title}
          </h2>
        }
        <div className="[ -mx-4 mt-4 flex flex-wrap ]">
          <div className="[ homepage__media-wrapper px-4 w-full mt-6 md:w-6/12 ]">
            {
              isVideo && sectionToRender.video &&
              <Video videoUrl={sectionToRender.video}/>
            }
            {
              !isVideo && sectionToRender.image &&
              <img src={sectionToRender.image.localFile.childImageSharp.fluid.src}
                   srcSet={sectionToRender.image.localFile.childImageSharp.fluid.srcSet}
                   sizes="(min-width: 768px) 50vw, 100vw"
                   alt={sectionToRender.image.altText}/>
            }
            {
              sectionToRender.mediaCaption &&
              <small
                className="[ inline-block mt-4 font-light ]"
                dangerouslySetInnerHTML={{ __html: sectionToRender.mediaCaption }}/>
            }
          </div>
          <div className="[ w-full px-4 md:w-6/12 mt-6 md:w-6/12 ]">
            {
              sectionToRender.text &&
              <div dangerouslySetInnerHTML={{ __html: sectionToRender.text }}/>
            }
            {
              sectionToRender.cta &&
              <Cta data={sectionToRender.cta} />
            }
          </div>
        </div>
      </div>
    </ColourWrapper>
  )
}

export default HomepageSectionMediaTextLr;