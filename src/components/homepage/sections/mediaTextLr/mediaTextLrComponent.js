import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import FadeIn from '../../../atoms/fadeIn';
import ColourWrapper from "../../../atoms/colourWrapper";
import Video from "../../../molecules/video";
import Cta from "../../../molecules/cta";

const MediaTextLrSection = ({ data }) => {
  const isVideo = data.mediaType === 'video';

  return (
    <ColourWrapper
      classNames={`[ homepage-content homepage-content--media-text ${data.mediaSide === 'right' ? 'homepage-content--media-text-right' : ''} ]`}
      colours={data.colours}>
      <div className="[ tsw-container ]">
        {
          data.title &&
          <FadeIn>
            <h2 className="[ mt-0 text-center ]">
              {data.title}
            </h2>
          </FadeIn>
        }
        <div className="[ -mx-4 mt-4 flex flex-wrap ]">
          <div className="[ homepage__media-wrapper px-4 w-full mt-6 md:w-6/12 ]">
            {
              isVideo && data.videoGroup &&
              <FadeIn threshold="0.25">
                <Video video={data.videoGroup}/>
              </FadeIn>
            }
            {
              !isVideo && data.image &&
              <FadeIn threshold="0.25">
                <GatsbyImage
                  image={data.image.localFile.childImageSharp.gatsbyImageData}
                  alt={data.image.altText}/>
              </FadeIn>
            }
            {
              data.mediaCaption &&
              <FadeIn>
                <small
                  className={`[ inline-block ${isVideo && data.videoGroup.videoType === 'shopShareTv' ? 'mt-2' : 'mt-4'} font-light ]`}
                  dangerouslySetInnerHTML={{ __html: data.mediaCaption }}/>
              </FadeIn>
            }
          </div>
          <div className="[ w-full px-4 md:w-6/12 mt-6 md:w-6/12 ]">
            <FadeIn>
              {
                data.text &&
                <div dangerouslySetInnerHTML={{ __html: data.text }}/>
              }
              {
                data.cta &&
                <Cta data={data.cta}/>
              }
            </FadeIn>
          </div>
        </div>
      </div>
    </ColourWrapper>
  )
}

export default MediaTextLrSection;