import React from "react";

import PreTestimonialFlexiComponent from "./preTestimonialsFlexi";
import PostTestimonialFlexiComponent from "./postTestimonialsFlexi";

const FlexiComponent = ({ isPreTestimonialsSection, index }) => {
  return (
    <>
      {
        isPreTestimonialsSection &&
        <PreTestimonialFlexiComponent index={index}/>
      }
      {
        !isPreTestimonialsSection &&
        <PostTestimonialFlexiComponent index={index}/>
      }
    </>
  )
}

export default FlexiComponent;