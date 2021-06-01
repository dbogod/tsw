import React from "react";

import PreTestimonialsTextOnlySection from "./preTestimonialsTextOnly";
import PostTestimonialsTextOnlySection from "./postTestimonialsTextOnly";

const TextOnly = ({ isPreTestimonialsSection, index }) => {
  return (
    <>
      {
        isPreTestimonialsSection &&
        <PreTestimonialsTextOnlySection index={index}/>
      }
      {
        !isPreTestimonialsSection &&
        <PostTestimonialsTextOnlySection index={index}/>
      }
    </>
  )
};

export default TextOnly;