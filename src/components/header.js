import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SocialLinks from './socialLinks';
import MainNavigation from "./mainNavigation";

const Header = ({ clickHandler }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    clickHandler();
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
    <header className="[ absolute left-0 right-0 flex flex-col justify-center z-20 ]">
      <div className="[ max-w-screen-xl mxw-full -auto px-4 py-2 flex justify-between md:py-4 ]">
        <div className="[ flex items-center ]">
          <Link to="/">
            <img src={headerLogo.localFile.childImageSharp.fluid.src}
                 srcSet={headerLogo.localFile.childImageSharp.fluid.srcSet}
                 sizes="(min-width: 640px) 150px, 100px"
                 alt={headerLogo.altText}/>
          </Link>
          <div>
            <SocialLinks/>
          </div>
        </div>
        <button className="[ hamburger hamburger--stand z-20 ] [ lg:hidden ]"
                type="button"
                onClick={handleClick}
                aria-label="Toggle menu"
                aria-controls="primary-menu"
                aria-expanded={isMenuOpen}>
                        <span className="[ hamburger-box ]">
                            <span className="[ hamburger-inner ]"></span>
                        </span>
        </button>
        <nav className="[ absolute top-0 left-0 right-0 z-10 lg:static ]">
          <div className="[ main-nav ]">
            <MainNavigation />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
