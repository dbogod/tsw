import React from 'react';
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import ContactForm from '../components/forms/contactForm';
import { graphql } from "gatsby";

const Contact = ({ data }) => {
  const { pageHeading, contactPage } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        <ContactForm successMessage={contactPage.formSuccessMessage}/>
      </LayoutPage>
    </LayoutMaster>
  )
};

export const query = graphql`
query Contact {
  allWpPage(filter: {uri: {eq: "/contact/"}}) {
    nodes {
      pageHeading {
        title
        intro
      },
      contactPage {
        formSuccessMessage
      }
    }
  }
}
`

export default Contact;