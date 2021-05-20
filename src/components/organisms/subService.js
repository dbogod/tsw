import React from 'react';
import parse from 'html-react-parser';

const SubService = ({ subService, hasPageTitle }) => {
  const {
    subServiceWyg,
    subServiceTitle,
    subServicePrice
  } = subService;

  const renderSubServiceTitle = html => {
    return hasPageTitle ? (
      <h4 dangerouslySetInnerHTML={{ __html: html }}/>
    ) : (
      <h3 dangerouslySetInnerHTML={{ __html: html }}/>
    );
  }

  return (
    <div className="[ services__sub-service ]">
      {
        subServiceTitle &&
        renderSubServiceTitle(subServiceTitle)
      }
      {
        subServiceWyg &&
        parse(subServiceWyg)
      }
      {
        subServicePrice &&
        <div className="[ mt-4 ]">
          <strong dangerouslySetInnerHTML={{ __html: subServicePrice }}/>
        </div>
      }
    </div>
  )
}

export default SubService;