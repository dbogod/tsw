import React from "react";
import ColourWrapper from "../../../atoms/colourWrapper";
import Video from "../../../molecules/video";
import { GatsbyImage } from "gatsby-plugin-image";
import Cta from "../../../molecules/cta";

const MediaTextLrSection = ({ data }) => {
  const isVideo = data.mediaType === 'video';

  return (
    <ColourWrapper
      classNames={`[ homepage-content homepage__content--media-text ${data.mediaSide === 'right' ? 'homepage__content--media-text-right' : ''} ]`}
      colours={data.colours}>
      <div className="[ tsw-container ]">
        {
          data.title &&
          <h2 className="[ mt-0 text-center ]">
            {data.title}
          </h2>
        }
        <div className="[ -mx-4 mt-4 flex flex-wrap ]">
          <div className="[ homepage__media-wrapper px-4 w-full mt-6 md:w-6/12 ]">
            {
              isVideo && data.videoGroup &&
              <Video video={data.videoGroup}/>
            }
            {
              !isVideo && data.image &&
              <GatsbyImage
                image={data.image.localFile.childImageSharp.gatsbyImageData}
                alt={data.image.altText}/>
            }
            {
              data.mediaCaption &&
              <small
                className={`[ inline-block ${isVideo && data.videoGroup.videoType === 'shopShareTv' ? 'mt-2' : 'mt-4'} font-light ]`}
                dangerouslySetInnerHTML={{ __html: data.mediaCaption }}/>
            }
          </div>
          <div className="[ w-full px-4 md:w-6/12 mt-6 md:w-6/12 ]">
            {
              data.text &&
              <div dangerouslySetInnerHTML={{ __html: data.text }}/>
            }
            {
              data.cta &&
              <Cta data={data.cta}/>
            }
          </div>
        </div>
      </div>
    </ColourWrapper>
  )
}

export default MediaTextLrSection;