import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
    <header className="[ absolute left-0 right-0 flex flex-col justify-center z-10 ]">
      <div className="[ max-w-screen-2xl px-4 py-2 flex justify-between md:py-4 ]">
        <div className="[ flex align-center ]">
          <Link to="/">
            <img src={headerLogo.localFile.childImageSharp.fluid.src}
                 srcSet={headerLogo.localFile.childImageSharp.fluid.srcSet}
                 sizes="(min-width: 640px) 150px, 100px"
                 alt={headerLogo.altText}/>
          </Link>
          {/*<div>*/}
          {/*  <ul>*/}
          {/*    <li>FB</li>*/}
          {/*    <li>Insta</li>*/}
          {/*    <li>Pin</li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
        <button className="[ hamburger hamburger--stand ] [ lg:hidden ]"
                type="button"
                onClick={handleClick}
                aria-label="Toggle menu"
                aria-controls="primary-menu"
                aria-expanded={isMenuOpen}>
                        <span className="[ hamburger-box ]">
                            <span className="[ hamburger-inner ]"></span>
                        </span>
        </button>
        {/*<nav className="[ absolute top-0 left-0 right-0 z-10 ]">*/}
        {/*  <div>*/}
        {/*    <ul>*/}
        {/*      <li>*/}
        {/*        <Link to="/">Home</Link>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <Link to="/about">About</Link>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <Link to="/frequently-asked-questions">FAQs</Link>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <Link to="/contact">Contact</Link>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</nav>*/}
      </div>
    </header>
  )
}

export default Header;
