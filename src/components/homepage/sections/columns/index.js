import React from "react";

import PreTestimonialColumnsSection from "./preTestimonialsColumns";
import PostTestimonialColumnsSection from "./postTestimonialsColumns";

const ColumnsComponent = ({ isPreTestimonialsSection, index }) => {
  return (
    <>
      {
        isPreTestimonialsSection &&
        <PreTestimonialColumnsSection index={index}/>
      }
      {
        !isPreTestimonialsSection &&
        <PostTestimonialColumnsSection index={index}/>
      }
    </>
  )
}

export default ColumnsComponent;