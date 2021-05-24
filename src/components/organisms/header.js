import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import MainNavigation from "./mainNavigation";

import SocialLinks from '../molecules/socialLinks';

const Header = ({ isNavOpen, clickHandler }) => {
  const handleClick = () => {
    if (clickHandler.current) {
      clickHandler.current();
    }
  };

  const data = useStaticQuery(graphql`
    query HeaderSettings {
      wp {
        themeSettings {
          themeSettings {
            header {
              headerLogo {
                altText
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                } 
              }
            }
          }
        }
      }
    }
  `);
  const { headerLogo } = data.wp.themeSettings.themeSettings.header;

  return (
    <header className="[ absolute left-0 right-0 flex flex-col justify-center h-16 sm:h-18 md:h-22 z-20 ]">
      <div className="[ tsw-container py-2 flex justify-between md:py-4 ]">
        <div className="[ flex items-center ]">
          <Link to="/" className="[ z-20 ]">
            <img src={headerLogo.localFile.childImageSharp.fluid.src}
                 srcSet={headerLogo.localFile.childImageSharp.fluid.srcSet}
                 sizes="(min-width: 640px) 150px, 100px"
                 alt={headerLogo.altText}/>
          </Link>
          <SocialLinks/>
        </div>
        <button className="[ hamburger hamburger--stand items-center z-20 ] [ lg:hidden ]"
                type="button"
                onClick={handleClick}
                aria-label="Toggle menu"
                aria-controls="primary-menu"
                aria-expanded={isNavOpen}>
          <span className="[ hamburger-box ]">
            <span className="[ hamburger-inner ]"/>
          </span>
        </button>
        <nav className="[ absolute top-0 left-0 right-0 z-10 lg:static ]">
          <MainNavigation isMenuOpen={isNavOpen}/>
        </nav>
      </div>
    </header>
  )
}

export default Header;
