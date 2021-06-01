import React from "react";

import PreTestimonialsMediaTextLrSection from "./preTestimonialsMediaTextLr";
import PostTestimonialsMediaTextLrSection from "./postTestimonialsMediaTextLr";

const MediaTextLr = ({ isPreTestimonialsSection, index }) => {
  return (
    <>
      {
        isPreTestimonialsSection &&
        <PreTestimonialsMediaTextLrSection index={index}/>
      }
      {
        !isPreTestimonialsSection &&
        <PostTestimonialsMediaTextLrSection index={index}/>
      }
    </>
  )
};

export default MediaTextLr;