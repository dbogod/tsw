import React from "react";
import parse from "html-react-parser";

const LayoutPage = ({ pageHeading, children }) => {
  const pageHeadingObj = pageHeading || {};
  const {title, intro} = pageHeadingObj;
  return (
    <section className="[ tsw-container pb-20 sm:grid sm:grid-cols-12 sm:gap-8 lg:flex ]">
      <div className="[ content ] [ relative sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:w-7/12 lg:mx-auto ]">
        {
          pageHeadingObj &&
          <div className="[ content__page-heading ]">
            {
              title &&
              <h2 className="[ pb-4 mt-2 border-b border-keyline-color sm:mt-8 ]">
                {title}
              </h2>
            }
            {
              intro && parse(intro)
            }
          </div>
        }
        {children}
      </div>
    </section>
  )
};

export default LayoutPage;
