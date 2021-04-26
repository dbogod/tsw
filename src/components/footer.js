import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import SocialLinks from './socialLinks';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterSettings {
      wp {
        themeSettings {
          themeSettings {
            footer {
              colours {
                bgColour
                whiteText
              }
              footerLogo {
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

  const { footer } = data.wp.themeSettings.themeSettings;
  const { fluid } = footer.footerLogo.localFile.childImageSharp;
  return (
    <footer className="[ absolute z-10 w-full ]"
            style={{ backgroundColor: footer.colours.bgColour }}
            data-light-bg={!footer.colours.whiteText}>
      <div
        className={`[ max-w-screen-2xl px-4 pb-6 flex flex-col items-center md:py-6 md:grid md:grid-cols-12 md:gap-4 ]`}>
        <div className="[ pt-12 pb-6 md:col-span-3 ]">
          <Link to="/">
            <img className="[ max-w-max md:max-w-full ]"
                 src={fluid.src}
                 srcSet={fluid.srcSet}
                 sizes="(min-width: 768px) 300px, 200px"
                 alt={footer.footerLogo.altText}/>
          </Link>
        </div>
        <div className="[ hidden md:block md:col-span-3 ]">
          Links list 1
        </div>
        <div className="[ hidden md:block md:col-span-3 ]">
          Links list 2
        </div>
        <div className="[ py-6 md:col-span-3 ]">
          <SocialLinks textWhite={footer.colours.whiteText}/>
        </div>
        <div className="[ pt-6 flex justify-center md:col-span-12 ]">
          Badges
        </div>
      </div>
    </footer>
  )
}

export default Footer;