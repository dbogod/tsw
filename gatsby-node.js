const path = require(`path`)

const seoFields = `
  seo {
    metaDesc
    focuskw
    cornerstone
    fullHead
    metaKeywords
    opengraphDescription
    opengraphImage {
      sourceUrl
    }
    opengraphTitle
    title
    twitterDescription
    twitterTitle
    twitterImage {
      sourceUrl
    }
  }`;

const pageHeadingFields = `
  pageHeading {
    title
    intro
  }`;

const query = `
  query {
    allWpPage {
      nodes {
        content
        uri
        title
        slug
        isFrontPage
        ${pageHeadingFields}
        ${seoFields}
      }
    }
  }`;

exports.createPages = async ({ actions, graphql }) => {
  const {data} = await graphql(`${query}`);

  if (!data) {
    return null;
  }

  data.allWpPage.nodes.forEach(page => {
    if (page.uri !== '/404/') {
      actions.createPage({
        path: page.uri,
        component: path.resolve('./src/components/templates/page.js'),
        context: {
          ...page,
          formspreeId: page.uri === '/contact/' ? process.env.FORMSPREE_ID_CONTACT_FORM : ''
        }
      })
    }
  })
}