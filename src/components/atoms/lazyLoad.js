import React, { useState } from 'react';

import IntersectionObserved from "./intersectionObserved";

const LazyLoad = ({ width = 'auto', height = 'auto', children }) => {
  const [isInViewport, updateIsInViewport] = useState(false);

  return (
    <>
      {
        isInViewport &&
        <>
          {children}
        </>
      }
      {
        !isInViewport &&
        <div style={{width: width, height: height}}>
          <IntersectionObserved parentFunc={() => updateIsInViewport(true)}/>
        </div>
      }
    </>
  );
}

export default LazyLoad;