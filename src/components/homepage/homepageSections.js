import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FeatureSectionSpeechBubble from './featureSections/speechBubble';
import Testimonials from "./featureSections/testimonials";
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

  const sectionsByType = sectionsObj => {
    if (sectionsObj) {
      return {
        'page_Homepagesections_Section_FwMedia': sectionsObj.filter(section => section.fieldGroupName === 'page_Homepagesections_Section_FwMedia'),
        'page_Homepagesections_Section_Text': sectionsObj.filter(section => section.fieldGroupName === 'page_Homepagesections_Section_Text')
      }
    }
  }

    const { featureSectionSpeechBubble } = data.allWpPage.nodes[0].homePageSections;
    const preTestimonialsSections = data.allWpPage.nodes[0].homePageSections.section;
    const postTestimonialsSections = data.allWpPage.nodes[0].homePageSections.sectionPostTestimonials;
    const preTestimonialsSectionsByType = sectionsByType(preTestimonialsSections);
    const postTestimonialsSectionsByType = sectionsByType(postTestimonialsSections);


    const renderSection = (section, isPreTestimonialsSection = true) => {
      const obj = isPreTestimonialsSection ? preTestimonialsSectionsByType : postTestimonialsSectionsByType;
      const index = obj && obj[section.fieldGroupName]?.indexOf(section);

      switch (section.fieldGroupName) {
        case 'page_Homepagesections_Section_FwMedia':
          return <HomepageSectionFullWidth index={index} />;
        case 'page_Homepagesections_Section_Text':
          return <HomepageSectionText index={index} />;
        default:
          return false;
      }
    };

    return (
      <>

        {
          featureSectionSpeechBubble?.showFeatureSection &&
          <FeatureSectionSpeechBubble/>
        }
        {
          preTestimonialsSections?.map((section, i) => {
            return (
              <section key={i}>
                {renderSection(section)}
              </section>
            )
          })
        }

        <Testimonials/>

        {
          postTestimonialsSections?.map((section, i) => {
            return (
              <section key={i}>
                {renderSection(section)}
              </section>
            )
          })
        }
      </>

    );
  }
;

export default HomepageSections;