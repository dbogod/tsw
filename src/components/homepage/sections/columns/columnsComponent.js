import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';

import FadeIn from '../../../atoms/fadeIn';
import ColourWrapper from "../../../atoms/colourWrapper";

const ColumnsComponent = ({ data }) => {
  const { fwTitle, column } = data;
  return (
    <ColourWrapper
      classNames={`[ homepage-content homepage-content--media-text ${data.mediaSide === 'right' ? 'homepage-content--media-text-right' : ''} ]`}
      colours={data.colours}>
      <div className="[ tsw-container ]">
        {
          fwTitle &&
          <FadeIn threshold="1">
            <h2 className="[ mt-0 text-center ]">
              {fwTitle}
            </h2>
          </FadeIn>
        }
        <div className="[ -mx-4 mt-2 md:mt-6 flex flex-wrap ]">
          {
            column.length &&
            column.map((col, i) => {
              const { title, text, image } = col;
              return (
                <div
                  key={i}
                  className="[ homepage-content__column ]">
                  {
                    image &&
                    <FadeIn threshold="0.75">
                      <GatsbyImage
                        image={image.localFile.childImageSharp.gatsbyImageData}
                        alt={image.altText}/>
                    </FadeIn>
                  }
                  {
                    title &&
                    <FadeIn threshold="1">
                      <h3 className={image ? '[ mt-4 ]' : ''}>
                        {title}
                      </h3>
                    </FadeIn>
                  }
                  {
                    text &&
                    <FadeIn threshold="0.2">
                      <div
                        className="[ mt-4 ]"
                        dangerouslySetInnerHTML={{ __html: text }}/>
                    </FadeIn>
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </ColourWrapper>
  );
};

export default ColumnsComponent;