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
      uri
      title
      slug
      ${pageHeadingFields}
      ${seoFields}
    }
  }
}
`;

exports.createPages = async ({ actions, graphql }) => {
  const {data} = await graphql(`${query}`);

  if (!data) {
    return null;
  }

  data.allWpPage.nodes.forEach(page => {
    actions.createPage({
      path: page.uri,
      component: path.resolve('./src/components/templates/page.js'),
      context: {
        ...page,
        pageHeading: page.pageHeading,
        title: page.title,
        uri: page.uri,
        slug: page.slug
      }
    })
  })
}