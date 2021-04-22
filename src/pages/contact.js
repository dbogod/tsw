import React from 'react';
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";
import { graphql } from "gatsby";

const Contact = () => {
  // const { pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage>
          <form className="relative"
                action="https://getform.io/f/c022f79f-5264-4d77-af54-7986e1e07b6d"
                method="POST">
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" aria-required="true" required />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input id="email" type="text" aria-required="true" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" cols="40" rows="10"/>
            </div>
            <input type="submit" value="Submit" onChange={() => console.log('submitted')}/>
          </form>
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
      }
    }
  }
}
`

export default Contact;