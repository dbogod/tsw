import React from "react";
import IntersectionObserved from '../../shared/intersectionObserved';

const TestimonialCard = ({ testimonial, paginationContainer, container, index }) => {
  const { quote, name, date } = testimonial;
  const wrapperId = `slide-${index}`;

  const updatePaginationLink = slide => {
    const links = paginationContainer?.current?.querySelectorAll('a');

    links.forEach(link => {
      if (link.getAttribute('href') === `#${slide?.target?.id}`) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    })
  };

  return (
    <IntersectionObserved
      root={container.current}
      threshold={0.75}
      wrapperId={wrapperId}
      wrapperClasses={["testimonials-slider__slide"]}
      updateFunc={updatePaginationLink}
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