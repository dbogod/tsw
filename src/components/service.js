import React, { useState } from 'react';
import parse from 'html-react-parser';

const Service = ({ service, hasPageTitle }) => {
  const [areDetailsVisible, setAreDetailsVisible] = useState(false);
  const renderServiceTitle = html => {
    return hasPageTitle ? (
      <h3 dangerouslySetInnerHTML={{ __html: html }}/>
    ) : (
      <h2 dangerouslySetInnerHTML={{ __html: html }}/>
    );
  }

  const {
    serviceDesc,
    serviceLongDesc,
    servicePs,
    cta,
    serviceTitle,
    serviceWyg,
    servicePrice,
    subServiceRequired
  } = service;

  const ctaText = cta ?? serviceTitle ? `Get in touch about ${serviceTitle}` : null;
  const ctaUrl = `/contact?service=${serviceTitle.toLowerCase().replace(' ', '-')}`;

  return (
    <li className="[ service mx-0 pb-4 ]">
      {
        serviceTitle &&
        renderServiceTitle(serviceTitle)
      }
      <div className="[ flex flex-wrap items-start mt-2 ]">
        {
          serviceDesc &&
          <div
            className="[ relative w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto ]"
            dangerouslySetInnerHTML={{ __html: serviceDesc }}/>
        }
        {
          (serviceLongDesc || subServiceRequired || servicePrice || servicePs) &&
          <div className="[ relative w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto flex flex-col ]">
            <details
              className="[ mt-1 ]"
              onClick={() => setAreDetailsVisible(!areDetailsVisible)}>
              <summary>
                {areDetailsVisible ? 'Show less' : 'Show more...'}
              </summary>
              {
                serviceLongDesc &&
                parse(serviceLongDesc)
              }
              {
                serviceWyg &&
                <div
                  className="[ mt-4 ]"
                  dangerouslySetInnerHTML={{ __html: serviceWyg }}/>
              }
              {
                servicePrice &&
                <div className="[ mt-4 ]">
                  <strong dangerouslySetInnerHTML={{ __html: servicePrice }}/>
                </div>
              }
              {
                servicePs &&
                <div className="[ mt-4 ]">
                  <small
                    className="[ block ]"
                    dangerouslySetInnerHTML={{ __html: servicePs }}/>
                </div>
              }
              {
                ctaUrl && ctaText &&
                <a
                  className="[ cta cta--secondary mt-4 ]"
                  href={ctaUrl}
                  data-value={ctaText}>
                  {ctaText}
                </a>
              }
            </details>
          </div>
        }
      </div>
    </li>
  )
};

export default Service;