import React from "react";

const LayoutPage = ({ pageHeading, children }) => {
  const { title, intro } = pageHeading;
  return (
    <section className="[ max-w-screen-2xl px-4 mx-auto grid grid-cols-12 gap-4 ]">
      <div className="[ content ] [ col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 ]">
        {
          (title || intro) &&
          <div className="[ content__page-heading ]">
            {
              title &&
              <h2 className="[ pb-4 border-b border-black ]">
                {title}
              </h2>
            }
            {
              intro &&
              <div dangerouslySetInnerHTML={{ __html: intro }}/>
            }
          </div>
        }
        {children}
      </div>
    </section>
  )
};

export default LayoutPage;
