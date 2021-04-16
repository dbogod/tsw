import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Home({ data }) {
  const { hero } = data.allWpPage.nodes[0];
  return (
    <Layout>
      <section>
        {
          (hero.heroTitle || hero.heroBody) &&
          <div className="[ hero ]">
            <div className="[ container ]">
              <div className="[ row ]">
                <div className="[ col-md-7 col-lg-6 ]">
                  <div className="[ hero__content ]">
                    <div className="[ hero__content-inner-wrapper hero__content-inner-wrapper--slug ]">
                      {
                        hero.heroTitle &&

                        <h2 className="[ hero__title ] [ py-1 py-xs-sm-2 py-md-0 ] [ mt-md-2 mt-lg-4 ]">
                          {hero.heroTitle}
                        </h2>

                      }
                      <div className="[ hero__body-image-wrapper ]">
                        {
                          hero.heroBody &&

                          <div className="[ hero__body ]" dangerouslySetInnerHTML={{ __html: hero.heroBody }}/>

                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    </Layout>
  )
};

export const query = graphql`
query Hero {
  allWpPage(filter: {uri: {eq: "/"}}) {
    nodes {
      hero {
        heroBody
        heroTitle
      }
    }
  }
}
`
