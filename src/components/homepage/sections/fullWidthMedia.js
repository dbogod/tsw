import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import ColourWrapper from "../../atoms/colourWrapper";

import Video from '../../molecules/video';

const HomepageSectionFullWidth = ({ index }) => {
  const data = useStaticQuery(graphql`
    query SectionFullWidth {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            section {
              ... on WpPage_Homepagesections_Section_FwMedia {
                intro
                mediaType
                title
                video
                video2
                colours {
                  bgColour
                  whiteText
                }
              }
            }
          }
        }
      }
    }`
  )

  const sections = data.allWpPage.nodes[0].homePageSections.section;
  const fullWidthSections = sections.filter(section => section.__typename === 'WpPage_Homepagesections_Section_FwMedia');
  const sectionToRender = fullWidthSections[index];

  return (

    <ColourWrapper classNames="homepage-content homepage-content--fw-media"
                   colours={sectionToRender.colours}>
      <div className="[ tsw-container sm:grid sm:grid-cols-12 sm:gap-x-8 ]">
        {
          sectionToRender.title &&
          <div className="[ sm:col-span-11 sm:col-start-2 md:col-span-10 md:col-start-3 ]">
            <h2 className="[ mt-0 ]"
                dangerouslySetInnerHTML={{ __html: sectionToRender.title }}/>
          </div>
        }

        {
          sectionToRender.intro &&
          <div
            className="[ sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-3 ]">
            <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html: sectionToRender.intro }}/>
          </div>
        }
        {
          sectionToRender.video &&
          <div className={`[ ${sectionToRender.video2 ? 'col-span-6' : 'col-span-12'} mt-3 sm:mt-4 md:mt-5 ]`}>
            <Video videoUrl={sectionToRender.video}/>
          </div>
        }
        {
          sectionToRender.video2 &&
          <div className={`[ ${sectionToRender.video ? 'col-span-6' : 'col-span-12'} mt-3 sm:mt-4 md:mt-5 ]`}>
            <Video videoUrl={sectionToRender.video2}/>
          </div>
        }
      </div>
    </ColourWrapper>
  )
}

export default HomepageSectionFullWidth;