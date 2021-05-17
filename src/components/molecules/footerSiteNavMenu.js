import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

const FooterSiteNavMenu = () => {
  const data = useStaticQuery(graphql`
    query FooterSiteNavMenu {
      allWpMenu(filter: {name: {eq: "Footer navigation"}}) {
        nodes {
          menuItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
  `);

  const { nodes } = data.allWpMenu.nodes[0].menuItems;
  if (nodes.length > 0) {
    return (
      <div className="[ hidden md:block md:col-span-3 ]">
        <ul>
          {
            nodes.map((menuItem, i) => {
              return(
                <li className="[ mb-2 ]" key={i}>
                  <Link to={menuItem.path}
                        className="[ no-underline hover:underline ]">
                    {menuItem.label}
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

export default FooterSiteNavMenu;