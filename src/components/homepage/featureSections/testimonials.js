import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialCard from './testimonialCard';
import ChevronLeft from '../../../assets/svg/chevron-left.svg';
import ChevronRight from '../../../assets/svg/chevron-right.svg';

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

  const nextPrevClickHandler = e => {
    e.preventDefault();
    const container = slidesContainer.current;

    if (container) {
      const slidesContent = [...container.querySelectorAll('[data-slide-content]')];
      const slideContentWidth = slidesContent[0]?.offsetWidth;
      const isNextBtn = e.currentTarget === nextButton.current;
      if (slideContentWidth) {
        container.scrollLeft += slideContentWidth && isNextBtn ? slideContentWidth : slideContentWidth * -1;
      }
    }
  };

  const paginationClickHandler = e => {
    e.preventDefault();
    const container = slidesContainer.current;
    const targetSlide = container?.querySelector(e.target?.getAttribute('href'));
    targetSlide && container.scrollTo(targetSlide.offsetLeft, 0);
  }

  const { testimonials } = data.wp.testimonials;

  if (testimonials.showSectionTestimonials) {
    return (
      <section>
        <div className="[ homepage-content flex-wrap ]">
          <div className="[ tsw-container ]">
            <h2
              className="[ mt-0 flex justify-center text-center ]"
              dangerouslySetInnerHTML={{ __html: testimonials.sectionTitleTestimonials }}/>
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
                    return (
                      <TestimonialCard
                        testimonial={testimonial}
                        index={i}
                        paginationContainer={paginationContainer}
                        container={slidesContainer}
                        key={i}/>
                    );
                  })
                }
              </div>
              <div
                ref={paginationContainer}
                className="[ testimonials-slider__pagination ]">
                {
                  testimonials.testimonials &&
                  testimonials.testimonials.map((testimonial, i) => {
                    const id = `slide-${i}`;
                    return (
                      <a
                        href={`#${id}`}
                        aria-label={`Go to slide ${i}`}
                        onClick={paginationClickHandler}
                        key={i}/>
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
}

export default Testimonials;

