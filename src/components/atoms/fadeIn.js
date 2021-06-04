import React, { useState } from 'react';

import IntersectionObserved from "../particles/intersectionObserved";

const FadeIn = ({ wrapperClasses, threshold = '0', children }) => {
  const [hasFadedIn, updateHasFadedIn] = useState(false);

  return (
    <IntersectionObserved
      threshold={threshold}
      wrapperClasses={`[ ${wrapperClasses ?? ''} transform duration-500 ease-in-out ${!hasFadedIn ? 'opacity-0 translate-y-6' : ''} ]`}
      parentFunc={() => updateHasFadedIn(true)}>
      {children}
    </IntersectionObserved>
  );
};

export default FadeIn;