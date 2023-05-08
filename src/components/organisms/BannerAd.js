import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const BannerAd = () => {
  const data = useStaticQuery(graphql`
    query BannerAdSettings {
      wp {
        themeSettings {
          themeSettings {
            bannerAd {
              cta {
                target
                title
                url
              }
              image {
                altText
                sourceUrl
              }
              title
              subtitle
            }
          }
        }
      }
    }
  `)

  const { bannerAd } = data.wp.themeSettings.themeSettings
  const { cta, image, title, subtitle } = bannerAd

  if (!title) {
    return null
  }

  return (
    <div className="[ banner-ad bg-broom mb-2 md:mb-4 shadow-lg py-4 ]">
      <div className="[ tsw-container flex justify-center items-center h-full ]">
        <div className="[ flex flex-col ]">
          <div className="[ flex flex-col ]">
            <span className="[ font-bold italic ]">{title}</span>
            {subtitle && <span>{subtitle}</span>}
          </div>
          {cta?.url && cta.title && (
            <a
              className="[ cta cta--secondary text-sm md:self-center ]"
              href={cta.url}
              target={cta.target}
            >
              {cta.title}
            </a>
          )}
        </div>

        <div className="[ banner-ad__img-wrapper flex-shrink-0 ]">
          <img
            className="[ ml-8 md:mt-7 shadow-2xl ]"
            src={image.sourceUrl}
            alt={image.altText}
          />
        </div>
      </div>
    </div>
  )
}
export default BannerAd
