import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FeatureSectionSpeechBubble from './featureSections/speechBubble';
import Testimonials from "./testimonials";
import HomepageSectionFullWidth from "./sections/fullWidthMedia";
import HomepageSectionText from "./sections/textOnly";

const HomepageSections = () => {
    const data = useStaticQuery(graphql`
    query Sections {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
            featureSectionSpeechBubble {
              showFeatureSection
            }
            section {
              ... on WpPage_Homepagesections_Section_Text {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_Section_Columns {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_Section_TextWithImage {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_Section_Flexi {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_Section_FwMedia {
                fieldGroupName
              }
            }
            sectionPostTestimonials {
              ... on WpPage_Homepagesections_SectionPostTestimonials_Text {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_SectionPostTestimonials_Columns {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_SectionPostTestimonials_TextWithImage {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_SectionPostTestimonials_Flexi {
                fieldGroupName
              }
              ... on WpPage_Homepagesections_SectionPostTestimonials_FwMedia {
                fieldGroupName
              }
            }
          }
        }
      }
    }`
    );

    const { featureSectionSpeechBubble } = data.allWpPage.nodes[0].homePageSections;
    const preTestimonialsSections = data.allWpPage.nodes[0].homePageSections.section;
    const postTestimonialsSections = data.allWpPage.nodes[0].homePageSections.sectionPostTestimonials;

    const renderSection = section => {
      switch (section.fieldGroupName) {
        case 'page_Homepagesections_Section_FwMedia':
          return <HomepageSectionFullWidth/>;
        case 'page_Homepagesections_Section_Text':
          return <HomepageSectionText/>;
        default:
          return false;
      }
    };

    return (
      <div>

        {
          featureSectionSpeechBubble?.showFeatureSection &&
            <FeatureSectionSpeechBubble />
        }
        {
          preTestimonialsSections?.map((section, i) => {
            return (
              <div key={i}>
                {renderSection(section)}
              </div>
            )
          })
        }

        <Testimonials/>

        {
          postTestimonialsSections?.map((section, i) => {
            return (
              <div key={i}>
                {renderSection(section)}
              </div>
            )
          })
        }
      </div>

    );
  }
;

export default HomepageSections;