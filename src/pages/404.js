import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import LayoutMaster from "../components/particles/layoutMaster"
import LayoutPage from "../components/particles/layoutPage"

const FallbackContent = () => {
  return (
    <>
      <p>
        Sorry, but I can't find that page right now. Double check the address, or perhaps visit one of the pages below:
      </p>
      <ul>
        <li>
          <Link to="/">
            Home page
          </Link>
        </li>
        <li>
          <Link to="/services/">
            Services
          </Link>
        </li>
        <li>
          <Link to="/frequently-asked-questions/">
            Frequently asked questions
          </Link>
        </li>
      </ul>
      <p>
        If you think you are seeing this page in error, or if you have any other questions, please get in touch via
        <Link to="/contact/">the Contact page</Link>.
      </p>
    </>
  )
}

const NotFoundPage = () => {
  const { wp } = useStaticQuery(
    graphql`
      query {
        wp {
          themeSettings {
            themeSettings {
              notFoundPage {
                content404
                title404
              }
            }
          }
        }
      }
    `
  );

  const { notFoundPage } = wp.themeSettings.themeSettings;
  const pageHeading = {
    title: notFoundPage.title404 || 'Page not found',
    intro: notFoundPage.content404
  }

  return (
    <LayoutMaster>
      <LayoutPage pageHeading={pageHeading}>
        {
          !pageHeading.intro &&
          <FallbackContent/>
        }
      </LayoutPage>
    </LayoutMaster>
  )
}

export default NotFoundPage;
