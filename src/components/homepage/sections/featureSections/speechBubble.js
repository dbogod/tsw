import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FadeIn from '../../../atoms/fadeIn';

const FeatureSectionSpeechBubble = () => {
  const data = useStaticQuery(graphql`
    query FeatureSectionSpeechBubble {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            featureSectionSpeechBubble {
              content
              colours {
                whiteText
                bgColour
              }
            }
          }
        }
      }
    }`
  )

  const { featureSectionSpeechBubble } = data.allWpPage.nodes[0].homePageSections
  const speechBubbleLines = [
    "I have nothing to wear, no matter how many clothes I buy!",
    "I often feel what I wear doesn't reflect who I am as a person",
    "I see clothes I like, but then think <em>'I could never pull that off'</em>",
    "I think darker colours are a safer choice as then I don't stand out"
  ];

  return (
    <section className="[ section-shadow-wrapper ]">
      <div
        className="[ homepage-content homepage-content--feature ]"
        style={{
          backgroundColor: featureSectionSpeechBubble.colours.bgColour ?? '',
          color: featureSectionSpeechBubble.colours.whiteText ? '#fff' : ''
        }}
      >
        <div className="[ tsw-container sm:grid sm:grid-cols-12 sm:gap-x-8 ]">

          <div className="[ sm:col-span-11 sm:col-start-2 md:col-span-10 md:col-start-3 ]">
            <div className="[ slider__text ]">
              <div className="[ slider__title-wrapper ]">
                <FadeIn>
                  <h2 className="[ slider__title ]">
                    <span className="[ slider__title-pre ]">Does this</span>
                    <span className="[ hidden md:inline ]">&nbsp;</span>
                    <span className="[ slider__title-first-letter ]">S</span>ound familiar?
                  </h2>
                  <div className="[ slider__speech-bubble-wrapper ]">
                    <img className="[ slider__speech-bubble ]"
                         src={'../../images/speech-bubble.svg'}
                         alt="A cartoon speech bubble"/>
                    <div className="[ slider__list-wrapper ]">
                      <div className="[ slider__list-wrapper-inner ]">
                        <ul className="[ slider__list ]">
                          {
                            speechBubbleLines.map((line, i) => {
                              return (
                                <li key={i}
                                    dangerouslySetInnerHTML={{ __html: line }}/>
                              )
                            })
                          }
                          {
                            // First line required again to keep animation smooth
                          }
                          <li dangerouslySetInnerHTML={{ __html: speechBubbleLines[0] }}/>
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
          <div
            className="[ mt-2 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 lg:mt-4 lg:col-span-6 lg:col-start-3 ]">
            <FadeIn threshold="1">
              <div
                dangerouslySetInnerHTML={{ __html: featureSectionSpeechBubble.content }}/>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSectionSpeechBubble;