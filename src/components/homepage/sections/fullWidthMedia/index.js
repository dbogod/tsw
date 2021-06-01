import React from "react";

import PreTestimonialFwMediaSection from "./preTestimonialsFwMedia";
import PostTestimonialFwMediaSection from "./postTestimonialsFwMedia";

const FwComponent = ({ isPreTestimonialsSection, index }) => {
  return (
    <>
      {
        isPreTestimonialsSection &&
        <PreTestimonialFwMediaSection index={index}/>
      }
      {
        !isPreTestimonialsSection &&
        <PostTestimonialFwMediaSection index={index}/>
      }
    </>
  )
}

export default FwComponent;