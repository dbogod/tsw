import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
// import Img from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
  query HeaderSettings {
  wp {
    themeSettings {
      themeSettings {
        header {
          headerLogo {
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
        {/*<button className="lg:hidden"*/}
        {/*        aria-label="Toggle menu"*/}
        {/*        aria-controls="primary-menu"*/}
        {/*        aria-expanded="false">*/}
        {/*    <span>*/}
        {/*      <span>B</span>*/}
        {/*    </span>*/}
        {/*</button>*/}
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
        {/*        <Link to="/faq">Frequently Asked Questions</Link>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</nav>*/}
      </div>
    </header>
  )
}

export default Header;
