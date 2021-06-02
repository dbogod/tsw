import React from 'react';
import ContactForm from '../organisms/contactForm';
import { graphql, useStaticQuery } from "gatsby";

const Contact = ({ props }) => {
  const { location } = props;

  const data = useStaticQuery(graphql`
  query Contact {
    allWpPage(filter: {uri: {eq: "/contact/"}}) {
      nodes {
        contactPage {
          formSuccessMessage
        }
      }
    }
  }`);
  const { contactPage } = data.allWpPage.nodes[0];
  const { formspreeId } = props.pageContext;

  if (!formspreeId) {
    return false;
  }

  return (
    <ContactForm
      formspreeId={formspreeId}
      location={location}
      successMessage={contactPage.formSuccessMessage}/>
  )

};

export default Contact;