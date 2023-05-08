import React from 'react'

import LayoutMaster from '../particles/layoutMaster'
import LayoutPage from '../particles/layoutPage'

import Home from '../_customPages/home'
import About from '../_customPages/about'
import Author from '../_customPages/author'
import Speaker from '../_customPages/speaker'
import Services from '../_customPages/services'
import Faqs from '../_customPages/frequently-asked-questions'
import Contact from '../_customPages/contact'

const DefaultPageLayout = ({ props }) => {
  const { content } = props.pageContext
  return (
    <>
      {content && (
        <div
          className="[ content ]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  )
}

const Page = (props) => {
  const { uri, isFrontPage, title, pageHeading } = props.pageContext
  const fullWidthPageUris = [
    '/author/',
    '/speaker/',
  ]
  const isFullWidthPage = isFrontPage || fullWidthPageUris.includes(uri)
  const renderPage = () => {
    switch (uri) {
      case '/':
        return <Home />
      case '/about/':
        return <About />
      case '/author/':
        return <Author props={props}/>
      case '/speaker/':
        return <Speaker />
      case '/services/':
        return <Services hasPageTitle={pageHeading?.title} />
      case '/frequently-asked-questions/':
        return <Faqs />
      case '/contact/':
        return <Contact props={props} />
      default:
        return <DefaultPageLayout props={props} />
    }
  }

  return (
    <LayoutMaster props={props}>
      {isFullWidthPage && renderPage()}
      {!isFullWidthPage && (
        <LayoutPage
          pageHeading={
            pageHeading.title && pageHeading.intro ? pageHeading : { title }
          }
        >
          {renderPage()}
        </LayoutPage>
      )}
    </LayoutMaster>
  )
}

export default Page
