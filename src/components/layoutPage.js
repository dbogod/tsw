import React from "react";
import parse from "html-react-parser";

const LayoutPage = ({ pageHeading, children }) => {
  const title = pageHeading?.title;
  const intro = pageHeading?.intro;
  return (
    <section className="[ tsw-container flex ]">
      <div className="[ content ] [ relative w-full sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto ]">
        {
          pageHeading &&
          <div className="[ content__page-heading ]">
            {
              title &&
              <h2 className="[ pb-4 mt-2 border-b border-keyline-color ]">
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
