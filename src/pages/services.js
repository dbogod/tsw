import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import Service from "../components/service";

const Services = () => {
  const data = useStaticQuery(graphql`
    query Services {
      allWpPage(filter: {uri: {eq: "/services/"}}) {
        nodes {
          pageHeading {
            title
            intro
          }
          servicesPage {
            displayMainCta
            pageContents
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
              subServicesRequired
            }
            mainCta {
              preCtaText
              mainCtaText
            }
          }
        }
      }
    }
  `);

  const { servicesPage, pageHeading } = data?.allWpPage?.nodes[0];
  const hasPageTitle = pageHeading.title !== null;

  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
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

export default Services;