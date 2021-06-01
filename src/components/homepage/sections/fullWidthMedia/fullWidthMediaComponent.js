import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';

import ColourWrapper from "../../../atoms/colourWrapper";
import Video from '../../../molecules/video';

const FullWidthMediaComponent = ({ data }) => {
  const useWrapper = data.title || data.intro || data.mediaType === 'video';

  return (
    <>
      {
        useWrapper &&
        <ColourWrapper classNames="homepage-content homepage-content--fw-media"
                       colours={data.colours}>

          <div className="[ tsw-container sm:grid sm:grid-cols-12 sm:gap-x-8 ]">
            {
              data.title &&
              <div className="[ sm:col-span-11 sm:col-start-2 md:col-span-10 md:col-start-3 ]">
                <h2 className="[ mt-0 ]"
                    dangerouslySetInnerHTML={{ __html: data.title }}/>
              </div>
            }
            {
              data.intro &&
              <div
                className="[ sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-3 ]">
                <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html: data.intro }}/>
              </div>
            }
            {
              data.mediaType &&
              <>
                {
                  data.mediaType === 'image' && data.imageDesktop &&
                  <div className="[ col-span-12 mt-3 sm:mt-4 md:mt-5 ]">
                    <GatsbyImage
                      image={data.imageDesktop.localFile.childImageSharp.gatsbyImageData}
                      alt={data.imageDesktop.altText}/>
                  </div>
                }
                {
                  data.mediaType === 'video' &&
                  <>
                    {
                      data.video &&
                      <div className={`[ ${data.video2 ? 'col-span-6' : 'col-span-12'} mt-3 sm:mt-4 md:mt-5 ]`}>
                        <Video videoUrl={data.video}/>
                      </div>
                    }

                    {
                      data.video2 &&
                      <div className={`[ ${data.video ? 'col-span-6' : 'col-span-12'} mt-3 sm:mt-4 md:mt-5 ]`}>
                        <Video videoUrl={data.video2}/>
                      </div>
                    }
                  </>
                }
              </>
            }
          </div>
        </ColourWrapper>
      }
      {
        !useWrapper && data.mediaType && data.mediaType === 'image' && data.imageDesktop &&
        <GatsbyImage
          style={{ maxHeight: '80vh' }}
          image={data.imageDesktop.localFile.childImageSharp.gatsbyImageData}
          alt={data.imageDesktop.altText}/>
      }
    </>
  )
};

export default FullWidthMediaComponent;