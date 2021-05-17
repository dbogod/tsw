import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from "gatsby";
import debounce from 'lodash/debounce';

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
    <div className="[ main-nav ]">
      <ul>
        {
          nodes.map((menuItem, i) => {
            return (
              <li key={i}
                  className="[ block mx-4 my-0 ]">
                <Link to={menuItem.path}
                      onClick={() => clickHandler()}
                      data-main-nav-link
                      tabIndex={isMobileOrTablet ? isMenuOpen ? '0' : '-1' : '0'}>
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

export default MainNavigation;
