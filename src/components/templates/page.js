import React from 'react';

import LayoutMaster from "../particles/layoutMaster";
import LayoutPage from "../particles/layoutPage";

import About from "../_customPages/about";
import Services from "../_customPages/services";
import Faqs from "../_customPages/frequently-asked-questions";
import Contact from '../_customPages/contact';

const DefaultPageLayout = ({ props }) => {
  const { title } = props.pageContext;
  return (
    <>
      <h1>
        Default page layout
      </h1>
      <p>
        Page title: {title}
      </p>
    </>
  )
}

const Page = props => {
  const { uri, pageHeading } = props.pageContext;
  const renderPage = () => {
    switch (uri) {
      case '/about/':
        return <About/>;
      case '/services/':
        return <Services/>;
      case '/frequently-asked-questions/':
        return <Faqs/>;
      case '/contact/':
        return <Contact/>;
      default:
        return <DefaultPageLayout props={props}/>
    }
  }

  console.log(props);

  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        {renderPage()}
      </LayoutPage>
    </LayoutMaster>
  )
}

export default Page;