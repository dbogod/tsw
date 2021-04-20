import React from "react";

const PageHeading = ({ title, intro }) => {
  if (title || intro) {
    return (
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
    )
  }
};

export default PageHeading;