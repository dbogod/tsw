import React from "react";
// import { graphql } from "gatsby";
import LayoutMaster from "../components/layoutMaster";
import LayoutPage from "../components/layoutPage";

const Services = ({ data }) => {
  const { servicesPage, pageHeading } = data.allWpPage.nodes[0];
  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        Services
      </LayoutPage>
    </LayoutMaster>
  )
}

export default Services;