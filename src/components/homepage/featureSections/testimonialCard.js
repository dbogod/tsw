import React from "react";
import IntersectionObserved from '../../shared/intersectionObserved';

const TestimonialCard = ({ testimonial, container, index }) => {
  const { quote, name, date } = testimonial;

  return (
    <IntersectionObserved
      root={container.current}
      threshold={0.75}
      wrapperId={`slide-${index}`}
      wrapperClasses={["testimonials-slider__slide"]}
      activeClass="is-active">
      <div className="[ testimonials-slider__slide-content ]"
           data-slide-content>
        {
          quote &&
          <blockquote className="[ py-3 ]">
            <span className="[ relative ]"
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
      </div>
    </IntersectionObserved>
  )
}

export default TestimonialCard;