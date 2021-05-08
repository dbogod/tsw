import React, { useEffect, useRef, useState } from "react";

const TestimonialCard = ({ testimonial, container }) => {
  const { quote, name, date } = testimonial;
  const card = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting}) => {
        setIsVisible(isIntersecting);
      });
    }, {
      threshold: 0.75
    });

    card.current && observer.observe(card.current);
  });

  return (
    <div className={`[ testimonials-slider__slide ${isVisible ? 'is-active' : '' } ]`} ref={card}>
      <div className="[ testimonials-slider__slide-content ]">
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
    </div>
  )
}

export default TestimonialCard;