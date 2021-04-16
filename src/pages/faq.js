import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageHeading from "../components/pageHeading";

const faqs = ({ data }) => {
  const { faq } = data.allWpPage.nodes[0].faqPage;
  const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <Layout>
      <PageHeading
        title={ pageHeading.title }
        intro={ pageHeading.intro }
      />
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
    </Layout>
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
