import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FeatureSectionSpeechBubble from './sections/featureSections/speechBubble';
import FeatureSectionMissionStatement from './sections/featureSections/missionStatement';
import Testimonials from "./sections/featureSections/testimonials";
import HomepageSectionFullWidth from "./sections/fullWidthMedia";
import HomepageSectionText from "./sections/textOnly";
import HomepageSectionMediaTextLr from "./sections/mediaTextLr";

const HomepageSections = () => {
  const data = useStaticQuery(graphql`
    query Sections {
      allWpPage(filter: {isFrontPage: {eq: true}}) {
        nodes {
          homePageSections {
             featureSectionMissionStatement {
              showFeatureSection
            }
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
              ... on WpPage_Homepagesections_Section_MediaTextLr {
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
              ... on WpPage_Homepagesections_SectionPostTestimonials_MediaTextLr {
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
    }`);

  const sectionsByType = sectionsObj => {
    if (sectionsObj) {
      const obj = {};
      const firstItemFieldGroupName = sectionsObj[0]?.fieldGroupName;
      const endOfSectionStringIndex = firstItemFieldGroupName?.lastIndexOf("_");
      const sectionString = firstItemFieldGroupName?.substring(0, endOfSectionStringIndex);

      obj[`${sectionString}_FwMedia`] = sectionsObj.filter(section => {
        return section.fieldGroupName === `${sectionString}_FwMedia`;
      });
      obj[`${sectionString}_Text`] = sectionsObj.filter(section => {
        return section.fieldGroupName === `${sectionString}_Text`;
      });
      obj[`${sectionString}_MediaTextLr`] = sectionsObj.filter(section => {
        return section.fieldGroupName === `${sectionString}_MediaTextLr`;
      });

      return obj;
    }
  }

  const { featureSectionSpeechBubble, featureSectionMissionStatement } = data.allWpPage.nodes[0].homePageSections;
  const preTestimonialsSections = data.allWpPage.nodes[0].homePageSections.section;
  const postTestimonialsSections = data.allWpPage.nodes[0].homePageSections.sectionPostTestimonials;
  const preTestimonialsSectionsByType = sectionsByType(preTestimonialsSections);
  const postTestimonialsSectionsByType = sectionsByType(postTestimonialsSections);


  const renderSection = (section, isPreTestimonialsSection = true) => {
    const obj = isPreTestimonialsSection ? preTestimonialsSectionsByType : postTestimonialsSectionsByType;
    const index = obj && obj[section.fieldGroupName]?.indexOf(section);

    switch (section.fieldGroupName) {
      case 'page_Homepagesections_Section_FwMedia':
      case 'page_Homepagesections_SectionPostTestimonials_FwMedia':
        return (
          <HomepageSectionFullWidth
            isPreTestimonialsSection={isPreTestimonialsSection}
            index={index}/>
        );
      case 'page_Homepagesections_Section_Text':
      case 'page_Homepagesections_SectionPostTestimonials_Text':
        return (
          <HomepageSectionText
            isPreTestimonialsSection={isPreTestimonialsSection}
            index={index}/>
        );
      case 'page_Homepagesections_Section_MediaTextLr':
      case 'page_Homepagesections_SectionPostTestimonials_MediaTextLr':
        return (
          <HomepageSectionMediaTextLr
            isPreTestimonialsSection={isPreTestimonialsSection}
            index={index}/>
        );
      default:
        return false;
    }
  };

  return (
    <>
      {
        featureSectionMissionStatement?.showFeatureSection &&
        <FeatureSectionMissionStatement/>
      }
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
              {renderSection(section, false)}
            </section>
          )
        })
      }
    </>

  );
};

export default HomepageSections;