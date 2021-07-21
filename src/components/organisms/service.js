import React, { useState } from 'react';
import { Link } from "gatsby";
import parse from 'html-react-parser';

import SubService from "./subService";

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
    subService
  } = service;

  const serviceId = serviceTitle && serviceTitle.toLowerCase().replace(/[^a-zA-Z\d\s:]/g, '').replace(/\W/g, '-');
  const ctaText = cta ?? serviceTitle ? `Get in touch about ${serviceTitle}` : null;
  const ctaUrl = '/contact/';


  return (
    <li id={serviceId}
        className="[ services__service ]">
      {
        serviceTitle &&
        <div className="[ relative w-full ]">
          {
            renderServiceTitle(serviceTitle)
          }
        </div>

      }
      <div className="[ flex flex-wrap items-start mt-2 ]">
        {
          serviceDesc &&
          <div
            className="[ relative w-full ]"
            dangerouslySetInnerHTML={{ __html: serviceDesc }}/>
        }
        {
          (serviceLongDesc || subService || servicePrice || servicePs) &&
          <div className="[ relative w-full flex flex-col ]">
            <div className="[ service__details ]">
              <button
                aria-controls={`${serviceId}-details-wrapper`}
                aria-expanded={`${areDetailsVisible}`}
                onClick={() => setAreDetailsVisible(!areDetailsVisible)}>
                {areDetailsVisible ? 'Show less' : 'Show more...'}
              </button>
              <div
                id={`${serviceId}-details-wrapper`}
                className={`mt-4 ${areDetailsVisible ? '' : 'hidden'}`}>
                {
                  serviceLongDesc &&
                  parse(serviceLongDesc)
                }
                {
                  subService &&
                  subService.map((subServiceObj, i) => {
                    return (
                      <SubService
                        key={i}
                        subService={subServiceObj}
                        hasPageTitle={hasPageTitle}/>
                    )
                  })
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
                  <Link
                    className="[ cta cta--secondary mt-4 ]"
                    to={ctaUrl}
                    state={{ serviceTitle }}>
                    {ctaText}
                  </Link>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </li>
  )
};

export default Service;