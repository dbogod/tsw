import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import parse from 'html-react-parser';
import Service from "../organisms/service";

const Services = () => {
  const data = useStaticQuery(graphql`
  query ServicesPage {
  allWpPage(filter: {uri: {eq: "/services/"}}) {
    nodes {
      servicesPage {
        pageContents
        mainCta {
          preCtaText
          mainCtaText
        }
        service {
          serviceDesc
          serviceLongDesc
          servicePs
          servicePrice
          cta
          serviceTitle
          serviceWyg
          subService {
            subServiceWyg
            subServiceTitle
            subServicePrice
          }
        }
      }
    }
  }
}`);
  const { mainCta, pageContents, service } = data?.allWpPage?.nodes[0].servicesPage;
  const hasPageTitle = true;
  // const hasPageTitle = pageHeading.title !== null;

  return (
    <>
      {
        mainCta &&
        <div>
          {
            mainCta.preCtaText &&
            parse(mainCta.preCtaText)
          }
          <Link to="/contact/"
                className="[ cta ]"
                data-value={mainCta.mainCtaText}>
            {mainCta.mainCtaText}
          </Link>
        </div>
      }
      {
        pageContents && service &&
        <ul className="[ page-contents relative list-two-col mt-4 ]">
          {
            service.map((service, i) => {
              if (service.serviceTitle) {
                return (
                  <li key={i}>
                    <a
                      href={`#${service.serviceTitle.toLowerCase().replace(/[^a-zA-Z\d\s:]/g, '').replace(/\W/g, '-')}`}>
                      {service.serviceTitle}
                    </a>
                  </li>
                )
              }

              return false;
            })
          }
        </ul>
      }
      {
        service &&
        <ul className="[ services mt-4 ]">
          {
            service.map((service, i) => {
              return (
                <Service
                  key={i}
                  service={service}
                  hasPageTitle={hasPageTitle}/>
              )
            })
          }
        </ul>
      }
    </>
  )
}

export default Services;