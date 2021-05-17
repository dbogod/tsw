import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

const FooterServicesMenu = () => {
  const data = useStaticQuery(graphql`
    query FooterServicesMenu {
      allWpPage(filter: {slug: {eq: "services"}}) {
        nodes {
          servicesPage {
            service {
              serviceTitle
            }
          }
        }
      }
    }
  `);

  const serviceNavMenuItems = data.allWpPage.nodes[0].servicesPage.service;
  if (serviceNavMenuItems.length > 0) {
    return (
      <div className="[ hidden md:block md:col-span-3 ]">
        <ul>
          {
            serviceNavMenuItems.map((menuItem, i) => {
              const serviceId = menuItem.serviceTitle.replace(' ', '-').toLowerCase();
              return(
                <li className="[ mb-2 ]" key={i}>
                  <Link to={`/services#${serviceId}/`}
                        className="[ no-underline hover:underline ]">
                    {menuItem.serviceTitle}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  return false;
}

export default FooterServicesMenu;