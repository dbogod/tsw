import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

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
                    gatsbyImageData(breakpoints: [100, 150], sizes: "(min-width: 640px) 150px, 100px", width: 150)
                  }
                } 
              }
            }
          }
        }
      }
    }`);
  const { headerLogo } = data.wp.themeSettings.themeSettings.header;
  const { gatsbyImageData } = headerLogo.localFile.childImageSharp;

  return (
    <header className="[ absolute left-0 right-0 flex flex-col justify-center h-16 sm:h-18 md:h-22 z-20 ]">
      <div className="[ tsw-container py-2 flex justify-between md:py-4 ]">
        <div className="[ flex items-center ]">
          <Link to="/" className="[ z-20 ]">
            <Helmet>
              {
                gatsbyImageData.images.sources.length &&
                gatsbyImageData.images.sources.map(source => {
                  return (
                    <link rel="preload"
                          as="image"
                          href="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          type={source.type}
                          imagesrcset={source.srcSet}
                          imagesizes="100vw"/>
                  )
                })
              }
              <link rel="preload"
                    as="image"
                    href="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    imagesrcset={gatsbyImageData.images.fallback.srcSet}
                    imagesizes="100vw"/>
            </Helmet>
            <GatsbyImage
              image={gatsbyImageData}
              loading="eager"
              imgStyle={{ height: 'auto' }}
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
