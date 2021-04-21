import React from "react";
import { graphql } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";

const faqs = ({ data }) => {
  const { faq } = data.allWpPage.nodes[0].faqPage;
  const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        {
          faq.length &&
          faq.map((faq, index) => {
            return (
              <div key={index}>
                <h3 className="[ h5 ] [ font-family-standard ]">
                  {faq.faqQuestion}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: faq.faqAnswer }}/>
              </div>
            )
          })
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
