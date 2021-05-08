import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import FooterSiteNavMenu from './footerComponents/_footerSiteNavMenu';
import FooterServicesMenu from './footerComponents/_footerServicesMenu';
import SocialLinks from './socialLinks';

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
                    fixed(width: 120) {
                      ...GatsbyImageSharpFixed
                    }
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
  const footerLogoFluid = footer.footerLogo.localFile.childImageSharp.fluid;
  const footerBadges = footer.footerBadges?.filter(item => item.footerBadge !== null);
  return (
    <footer className="[ absolute z-20 w-full ]"
            style={{ backgroundColor: footer.colours.bgColour }}
            data-light-bg={!footer.colours.whiteText}>
      <div
        className={`[ tsw-container px-4 pb-6 flex flex-col items-center md:pb-6 md:pt-12 md:grid md:grid-cols-12 md:gap-8 md:items-start ]`}>
        <div className="[ footer-separator pt-12 pb-6 md:col-span-3 md:p-0 ]">
          <Link to="/">
            <img className="[ max-w-max md:max-w-full ]"
                 src={footerLogoFluid.src}
                 srcSet={footerLogoFluid.srcSet}
                 sizes="(min-width: 768px) 300px, 200px"
                 alt={footer.footerLogo.altText}/>
          </Link>
        </div>

        <FooterSiteNavMenu />

        <FooterServicesMenu />

        <div className="[ footer-separator py-6 md:col-span-3 md:p-0 ]">
          <SocialLinks textWhite={footer.colours.whiteText}/>
        </div>
        {
          footerBadges.length > 0 &&
          <div className="[ pt-6 flex justify-center md:col-span-12 ]">
            <ul className="[ flex ]">
              {
                footerBadges.map(({ footerBadge }, i) => {
                  const { fixed } = footerBadge.localFile.childImageSharp;
                  return (
                    <li key={i} className="[ mb-0 ]">
                      <img src={fixed.src} alt={footerBadge.altText}/>
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