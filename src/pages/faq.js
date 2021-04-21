import React from "react";
import { graphql } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import parse from 'html-react-parser';

const faqs = ({ data }) => {
  const { faq } = data.allWpPage.nodes[0].faqPage;
  const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
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
      </LayoutPage>
    </LayoutMaster>
  )
};

export const query = graphql`
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
`

export default faqs;
