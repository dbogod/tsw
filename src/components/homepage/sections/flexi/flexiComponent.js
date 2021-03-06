import React from "react";

import FadeIn from '../../../atoms/fadeIn';
import ColourWrapper from "../../../atoms/colourWrapper";

const FlexiComponent = ({ data }) => {
  return (
    <FadeIn threshold="0.1">
      <ColourWrapper
        classNames="homepage-content homepage-content--fw-media"
        colours={data.colours}>
      <div className="[ tsw-container flex justify-center ]">
        <div className="[ w-full px-4 sm:w-9/12 md:w-8/12 lg:w-7/12 ]">
          <div className="[ mt-4 ]"
               dangerouslySetInnerHTML={{ __html: data.content }}/>
        </div>
      </div>
      </ColourWrapper>
    </FadeIn>
  );
};

export default FlexiComponent;