import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";

const MainNavigation = ({ clickHandler }) => {
  const data = useStaticQuery(graphql`
    query MainNavigation {
      allWpMenu(filter: {name: {eq: "Main navigation"}}) {
        nodes {
          menuItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }`
  );

  const { nodes } = data.allWpMenu.nodes[0].menuItems;
  return (
    <ul
      className="[ flex flex-col justify-center items-center font-display font-bold text-4xl tracking-wider sm:text-6xl lg:flex-row lg:text-sm lg:font-body lg:uppercase lg:leading-6 ]">
      {
        nodes.map((menuItem, i) => {
          return (
            <li key={i}
                className="[ block mx-4 my-0 ]">
              <Link to={menuItem.path}
                    onClick={() => clickHandler()}
                    activeClassName="is-active"
                    className="[ inline-block py-2 text-nav-text-color no-underline transition-all duration-200 ease-out lg:relative lg:font-medium lg:p-0 lg:my-4 ]">
                {menuItem.label}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MainNavigation;
