import React from "react";
import parse from "html-react-parser";

const LayoutPage = ({ pageHeading, children }) => {
  const title = pageHeading?.title;
  const intro = pageHeading?.intro;
  return (
    <section className="[ tsw-container grid grid-cols-12 gap-8 ]">
      <div className="[ content ] [ relative col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 ]">
        {
          pageHeading &&
          <div className="[ content__page-heading ]">
            {
              title &&
              <h2 className="[ pb-4 border-b border-black ]">
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
