import React, { useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialCard  from './testimonialCard';

const Testimonials = () => {
  const slidesContainer = useRef(null);
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

  const { testimonials } = data.wp.testimonials;

  if (testimonials.showSectionTestimonials) {
    return (
      <section>
        <div className="[ homepage-content flex-wrap ]">
          <div className="[ tsw-container ]">
            <h2 className="[ mt-0 flex justify-center ]"
                dangerouslySetInnerHTML={{ __html: testimonials.sectionTitleTestimonials }}/>
          </div>
          <div className="[ tsw-container ]">
            <div className="[ testimonials-slider mt-4 ]">
              <button className="[ testimonials-slider__button testimonials-slider__button--prev ]"
                      aria-label="Show previous slide"/>
              <button className="[ testimonials-slider__button testimonials-slider__button--prev ]"
                      aria-label="Show next slide"/>
              <div ref={slidesContainer}
                   className="[ testimonials-slider__slides-container ]">
                {
                  testimonials.testimonials &&
                  testimonials.testimonials.map((testimonial, i) => {
                    return (
                      <TestimonialCard testimonial={testimonial}
                                       container={slidesContainer}
                                       key={i} />
                    );
                  })
                }
              </div>
              <div className="[ testimonials-slider__pagination ]">
                {
                  testimonials.testimonials &&
                  testimonials.testimonials.map((testimonial, i) => {
                    return (
                      <a href={`#slide-${i}`}
                         aria-label={`Go to slide ${i}`}
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

