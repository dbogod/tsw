import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'

import FadeIn from '../atoms/fadeIn'
import Cta from '../molecules/cta'

const ImageTextTwoCol = ({
  image,
  content,
  title,
  cta,
  wrapperClass,
  imageLeft,
  postCtaContent,
}) => {
  const wrapperClasses = classNames(
    'homepage-content homepage-content--mission-statement',
    wrapperClass,
  )

  if (!image || !content) {
    return null
  }

  return (
    <section>
      <div className={`[ ${wrapperClasses} ]`}>
        <div className="[ tsw-container md:grid md:grid-cols-12 md:gap-8 ]">
          <div
            className={`[ md:col-span-7 lg:col-span-6 ${
              imageLeft ? 'md:col-start-6 lg:col-start-7' : ''
            } ]`}
          >
            <div className="[ mission-statement__content ]">
              <div className="[ mission-statement__content-inner-wrapper lg:mb-8 ]">
                <div className="[ mission-statement__body-image-wrapper relative pb-12 md:flex ]">
                  {image && (
                    <div className="[ mission-statement__image-wrapper mission-statement__image-wrapper--sm ]">
                      <GatsbyImage
                        image={image.localFile.childImageSharp.gatsbyImageData}
                        alt={image.altText}
                      />
                    </div>
                  )}
                  {content && (
                    <FadeIn threshold="0.25">
                      <div className="[ mission-statement__body ]">
                        {title && <h2>{title}</h2>}
                        <div
                          className="[ mt-4 ]"
                          dangerouslySetInnerHTML={{ __html: content }}
                        />
                        <Cta data={cta} />
                        {postCtaContent && (
                          <div
                            className="[ mt-4 ]"
                            dangerouslySetInnerHTML={{ __html: postCtaContent }}
                          />
                        )}
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className={`[ md:col-span-5 lg:col-span-6 ${
              imageLeft ? 'md:row-start-1' : 'md:col-start-8 lg:col-start-7'
            }  hidden md:block ]`}
          >
            {image && (
              <div className="[ mission-statement__content ]">
                <div className="[ mission-statement__content-inner-wrapper ]">
                  <div
                    className={`[ ${
                      imageLeft
                        ? 'mission-statement__image-wrapper--left mr-4'
                        : 'ml-4'
                    } mission-statement__image-wrapper ]`}
                  >
                    <GatsbyImage
                      image={image.localFile.childImageSharp.gatsbyImageData}
                      alt={image.altText}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageTextTwoCol
