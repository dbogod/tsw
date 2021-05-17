import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from 'html-react-parser';

const Faqs = () => {
  const data = useStaticQuery(graphql`
  query FAQs {
    allWpPage(filter: {uri: {eq: "/frequently-asked-questions/"}}) {
      nodes {
        pageHeading {
          title
          intro
        }
        faqPage {
          faq {
            faqAnswer
            faqQuestion
          }
        }
      }
    }
  }
`);
  const { faq } = data.allWpPage.nodes[0].faqPage;
  return (
    <>
      {
        faq.length &&
        <ul className="[ mt-6 relative ]">
          {
            faq.map((faq, index) => {
              return (
                <li className="[ mt-4 ]"
                    key={index}>
                  <a href={`#faq-${index}`}>
                    {faq.faqQuestion}
                  </a>
                </li>
              )
            })
          }
        </ul>
      }
      {
        faq.length &&
        <div className="[ mt-2 ]">
          {
            faq.map((faq, index) => {
              return (
                <div id={`faq-${index}`}
                     key={index}>
                  <h3 className="[ text-xl ] [ font-body ]">
                    {faq.faqQuestion}
                  </h3>
                  <div className="[ mt-2 ]">
                    {parse(faq.faqAnswer)}
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </>
  )
};

export default Faqs;
