// With help from: https://non-traditional.dev/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
import React, { useRef, useState, useEffect } from "react";

const IntersectionObserved = (
  {
    root = null,
    threshold = 0,
    rootMargin = '0px',
    wrapperId,
    wrapperClasses,
    activeClass,
    children
  }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const observer = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    observer.current && observer.current.disconnect();
    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      root,
      rootMargin,
      threshold
    })

    const { current: currentObserver } = observer;
    ref.current && currentObserver.observe(ref.current);
    return () => currentObserver.disconnect();
  }, [ref, root, rootMargin, threshold]);

  return (
    <div id={wrapperId}
         className={`${wrapperClasses} ${isVisible ? activeClass : ''}`}
         ref={ref}>
      {children}
    </div>
  )
}

export default IntersectionObserved;