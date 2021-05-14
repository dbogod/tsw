import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Link, useStaticQuery, graphql } from "gatsby";

const MainNavigation = ({ clickHandler, isMenuOpen }) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(null);
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

  useEffect(() => {
    const isSmScreen = () => window.innerWidth < 1024;
    const resizeListener = debounce(() => {
      setIsMobileOrTablet(isSmScreen());
    }, 100);

    window.addEventListener('resize', resizeListener);

    setIsMobileOrTablet(isSmScreen());

    return () => window.removeEventListener('resize', resizeListener);
  }, [setIsMobileOrTablet]);
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
                    className="[ inline-block py-2 text-nav-text-color no-underline transition-all duration-200 ease-out sm:py-4 lg:relative lg:font-medium lg:p-0 lg:my-4 ]"
                    data-main-nav-link
                    tabIndex={isMobileOrTablet ? isMenuOpen ? '0' : '-1' : '0'}>
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
