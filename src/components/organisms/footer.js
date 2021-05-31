import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';

import FooterSiteNavMenu from '../molecules/footerSiteNavMenu';
import FooterServicesMenu from '../molecules/footerServicesMenu';
import SocialLinks from '../molecules/socialLinks';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterSettings {
    wp {
      themeSettings {
        themeSettings {
          footer {
            footerBadges {
              footerBadge {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(breakpoints: [80, 120], width: 120, sizes:"(min-width: 768px) 120px, 80px")                   
                  }
                }
              }
            }
            fieldGroupName
            colours {
              bgColour
              whiteText
            }
            footerLogo {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(breakpoints: [200, 300], sizes: "(min-width: 768px) 300px, 200px")
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
  const footerLogo = footer.footerLogo;
  const footerBadges = footer.footerBadges?.filter(item => item.footerBadge !== null);
  return (
    <footer className="[ absolute z-20 w-full ]"
            style={{ backgroundColor: footer.colours.bgColour }}
            data-light-bg={!footer.colours.whiteText}>
      <div
        className={`[ tsw-container pb-6 flex flex-col items-center md:pb-6 md:pt-12 md:grid md:grid-cols-12 md:gap-8 md:items-start ]`}>
        <div className="[ footer-separator pt-12 pb-6 md:col-span-3 md:p-0 ]">
          <Link to="/">
            <GatsbyImage
              className="footer__logo-wrapper"
              image={footerLogo.localFile.childImageSharp.gatsbyImageData}
              alt={footerLogo.altText}/>
          </Link>
        </div>

        <FooterSiteNavMenu/>

        <FooterServicesMenu/>

        <div className="[ footer-separator py-6 md:col-span-3 md:p-0 ]">
          <SocialLinks textWhite={footer.colours.whiteText}/>
        </div>
        {
          footerBadges.length > 0 &&
          <div className="[ pt-6 flex justify-center md:col-span-12 ]">
            <ul className="[ flex ]">
              {
                footerBadges.map(({ footerBadge }, i) => {
                  const badge = footerBadge.localFile.childImageSharp.gatsbyImageData;
                  return (
                    <li key={i} className="[ mb-0 ]">
                      <GatsbyImage
                        className="footer__badge-wrapper"
                        image={badge}
                        alt={footerBadge.altText}/>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    </footer>
  )
};

export default Footer;