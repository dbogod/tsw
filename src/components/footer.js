import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

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
                      presentationHeight
                      presentationWidth
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
    <footer className={`[ max-w-screen-2xl px-4 pb-6 ${footer.colours.whiteText ? 'text-white' : ''} flex flex-col items-center md:py-6 md:grid md:grid-cols-12 md:gap-4 ]`}
    style={{backgroundColor: footer.colours.bgColour}}>
      <div className="[ pt-12 pb-6 md:col-span-3 ]">
        <img className="[ max-w-max md:max-w-full ]"
             src={fluid.src}
             srcSet={fluid.srcSet}
             sizes="(min-width: 768px) 300px, 200px"
             width={fluid.presentationWidth}
             height={fluid.presentationHeight}
             alt={footer.footerLogo.altText}/>
      </div>
      <div className="[ hidden md:block md:col-span-3 ]">
        Links list 1
      </div>
      <div className="[ hidden md:block md:col-span-3 ]">
        Links list 2
      </div>
      <div className="[ py-6 md:col-span-3 ]">
        Socials
      </div>
      <div className="[ pt-6 flex justify-center md:col-span-12 ]">
        Badges
      </div>
    </footer>

  )
}

export default Footer;