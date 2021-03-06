import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";

import FadeIn from '../../../atoms/fadeIn';
import IntersectionObserved from "../../../particles/intersectionObserved";

import ChevronLeft from '../../../../assets/svg/chevron-left.svg';
import ChevronRight from '../../../../assets/svg/chevron-right.svg';
import SpeechMarks from '../../../../assets/svg/quote.svg';

const Testimonials = () => {
  const slidesContainer = useRef(null);
  const paginationContainer = useRef(null);
  const previousButton = useRef(null);
  const nextButton = useRef(null);
  const data = useStaticQuery(graphql`
    query Testimonials {
      wp {
        testimonials {
          testimonials {
            showSectionTestimonials
            sectionTitleTestimonials
            colourSpeechMark
            testimonials {
              name
              quote
              date
            }
          }
        }
      }
    }
  `);

  const scrollContainerToNextSlide = scrollFactor => {
    const container = slidesContainer.current;
    if (container) {
      const slidesContent = [...container.querySelectorAll('[data-slide-content]')];
      const slideContentWidth = slidesContent[0]?.offsetWidth;

      if (slideContentWidth) {
        container.scrollLeft += slideContentWidth * scrollFactor;
      }
    }
  };

  const getPaginationLinkDifference = target => {
    if (paginationContainer.current) {
      const links = [...paginationContainer.current.querySelectorAll('a')];
      const activeLink = links?.filter(link => link.classList.contains('is-active'))[0];
      const activeLinkIndex = links?.indexOf(activeLink);
      let targetLinkIndex;

      if (typeof target === 'object') {
        targetLinkIndex = links?.indexOf(target);
      } else {
        targetLinkIndex = activeLinkIndex + target;
      }

      const targetLink = links[targetLinkIndex];
      const linkDifference = targetLinkIndex - activeLinkIndex;

      if (activeLink && targetLink) {
        activeLink.classList.remove('is-active');
        targetLink.classList.add('is-active');
      }

      return linkDifference;
    }
  };

  const nextPrevClickHandler = e => {
    e.preventDefault();
    const scrollFactor = e.currentTarget === nextButton.current ? 1 : -1;
    getPaginationLinkDifference(scrollFactor);
    scrollContainerToNextSlide(scrollFactor);
  };

  const paginationLinkClickHandler = e => {
    e.preventDefault();
    if (paginationContainer.current) {
      const linkDiff = getPaginationLinkDifference(e.target);
      scrollContainerToNextSlide(linkDiff);
    }
  }

  const { testimonials } = data.wp.testimonials;

  if (!testimonials.showSectionTestimonials) {
    return false;
  }


  return (
    <section>
      <div className="[ homepage-content homepage-content--testimonials flex-wrap ]">
        <div className="[ tsw-container ]">
          <FadeIn>
            <h2
              className="[ mt-0 flex justify-center text-center ]"
              dangerouslySetInnerHTML={{ __html: testimonials.sectionTitleTestimonials }}/>
          </FadeIn>
        </div>
        <div className="[ max-w-screen-xl w-full mx-auto ]">
          <div className="[ testimonials-slider mt-4 ]">
            <button
              ref={previousButton}
              className="[ testimonials-slider__button testimonials-slider__button--prev ]"
              onClick={nextPrevClickHandler}
              aria-label="Show previous slide">
              <ChevronLeft/>
            </button>
            <button
              ref={nextButton}
              className="[ testimonials-slider__button testimonials-slider__button--next ]"
              onClick={nextPrevClickHandler}
              aria-label="Show next slide">
              <ChevronRight/>
            </button>
            <div ref={slidesContainer}
                 className="[ testimonials-slider__slides-container ]">
              {
                testimonials.testimonials &&
                testimonials.testimonials.map((testimonial, i) => {
                  const { quote, name, date } = testimonial;
                  return (
                    <IntersectionObserved
                      root={slidesContainer.current}
                      threshold={0.75}
                      wrapperId={`slide-${i}`}
                      wrapperClasses="testimonials-slider__slide"
                      activeClass="is-active"
                      key={i}>
                      <div className="[ testimonials-slider__slide-content ]"
                           data-slide-content>
                          <span
                            style={{ fill: testimonials.colourSpeechMark }}
                            className="[ absolute top-4 left-4 w-20 h-20 ]">
                            <SpeechMarks/>
                          </span>
                        {
                          quote &&
                          <blockquote className="[ py-3 ]">
                              <span
                                className="[ relative ]"
                                dangerouslySetInnerHTML={{ __html: quote }}/>
                          </blockquote>
                        }
                        {
                          (name || date) &&
                          <cite className="[ absolute flex flex-col ]">
                            {
                              name &&
                              <span dangerouslySetInnerHTML={{ __html: name }}/>
                            }
                            {
                              date &&
                              <span className="[ testimonials-slider__date ]"
                                    dangerouslySetInnerHTML={{ __html: date }}/>
                            }
                          </cite>
                        }
                        <span
                          style={{ fill: testimonials.colourSpeechMark }}
                          className="[ absolute bottom-4 right-4 w-20 h-20 transform rotate-180 ]">
                            <SpeechMarks/>
                          </span>
                      </div>
                    </IntersectionObserved>
                  );
                })
              }
            </div>
            <div ref={paginationContainer}
                 className="[ testimonials-slider__pagination ]">
              {
                testimonials.testimonials &&
                testimonials.testimonials.map((testimonial, i) => {
                  return (
                    <a
                      href={`#slide-${i}`}
                      className={i === 0 ? 'is-active' : ''}
                      onClick={paginationLinkClickHandler}
                      key={i}>
                        <span className="sr-only">
                          {`Go to slide ${i}`}
                        </span>
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;

