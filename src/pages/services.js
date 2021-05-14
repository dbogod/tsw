import React from "react";
import { Link, graphql } from "gatsby";
import parse from 'html-react-parser';
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import Service from "../components/service";

const Services = ({ data }) => {
  const { servicesPage, pageHeading } = data?.allWpPage?.nodes[0];
  const { mainCta, pageContents } = servicesPage;
  const hasPageTitle = pageHeading.title !== null;

  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
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
          pageContents && servicesPage.service &&
          <ul className="[ relative list-two-col mt-4 ]">
            {
              servicesPage.service.map((service, i) => {
                if (service.serviceTitle) {
                  return (
                    <li key={i}>
                      <a href={`#${service.serviceTitle.toLowerCase().replace(/[^a-zA-Z\d\s:]/g, '').replace(/\W/g, '-')}`}>
                        {service.serviceTitle}
                      </a>
                    </li>
                  )
                }
              })
            }
          </ul>
        }
        {
          servicesPage?.service &&
          <ul className="[ mt-4 ]">
            {
              servicesPage.service.map((service, i) => {
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
      </LayoutPage>
    </LayoutMaster>
  )
}

export const query = graphql`
query ServicesPage {
  allWpPage(filter: {uri: {eq: "/services/"}}) {
    nodes {
      pageHeading {
        title
        intro
      }
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
}`

export default Services;