import React from "react";

import ColourWrapper from "../../../atoms/colourWrapper";

const TextOnlySection = ({ data }) => (
  <ColourWrapper classNames="homepage-content text-center"
                 colours={data.colours}>
    <div className="[ tsw-container flex justify-center ]">
      <div className="[ w-full px-4 sm:w-9/12 md:w-8/12 lg:w-7/12 ]">
        {
          data.title &&
          <h2 className="[ mt-0 ]">
            {data.title}
          </h2>
        }
        {
          data.text &&
          <div className="[ mt-4 ]" dangerouslySetInnerHTML={{ __html: data.text }}/>
        }
      </div>
    </div>
  </ColourWrapper>
)

export default TextOnlySection;