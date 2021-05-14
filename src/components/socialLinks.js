import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import FacebookIcon from '../assets/svg/social-media-icons/facebook.svg'
import InstagramIcon from '../assets/svg/social-media-icons/instagram.svg'
import PinterestIcon from '../assets/svg/social-media-icons/pinterest.svg'
import TwitterIcon from '../assets/svg/social-media-icons/twitter.svg'

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
  query SocialLinks {
  allWp {
    nodes {
      themeSettings {
        themeSettings {
          socialLinks {
            socialLink {
              socialNetwork
              url
            }
          }
        }
      }
    }
  }
}
`)

  const { socialLink } = data.allWp.nodes[0].themeSettings.themeSettings.socialLinks;
  const socialMediaIcon = socialNetwork => {
    switch (socialNetwork.toLowerCase()) {
      case 'facebook':
        return <FacebookIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'pinterest':
        return <PinterestIcon />;
      case 'twitter':
        return <TwitterIcon />;
      default:
        return;
    }
  }

  return (
    <ul className="[ social-links-list ]">
      {
        socialLink.map((link, i) => {
          return (
            <li key={i}>
              <a href={link.url}
                 className="[ social-link ]">
                {socialMediaIcon(link.socialNetwork)}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
};

export default SocialLinks;