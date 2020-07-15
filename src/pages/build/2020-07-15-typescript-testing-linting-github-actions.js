import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery } from "gatsby"

const Development = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  return (
    <>
      <Layout>
        <SEO
          title="TypeScript, Testing, Linting and GitHub Actions | Build"
          description="In this session, I'll be joined by Auth0 colleague Ruben Restrepo in order to add TypeScript, Testing, Linting and GitHub Actions to the API project."
          meta={[
            {
              name: `twitter:image`,
              content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-15.png`,
            },
            {
              name: `og:image`,
              content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-15.png`,
              prefix: `og: http://ogp.me/ns#`,
            },
          ]}
        />
        <img
          className="fullwidth"
          src="/images/build/streams/2020-07-15.png"
          alt="Live Coding: TypeScript, Testing, Linting and GitHub Actions"
        />
        <section>
          <p>
            <a href="https://twitch.tv/bendechrai">
              <span role="img" aria-label="calendar">
                📆
              </span>{" "}
              Streaming live on Twitch: Wednesday 15th July at 1pm AEST
            </a>
          </p>
          <h2>
            15th July 2020 - TypeScript, Testing, Linting and GitHub Actions
          </h2>
          <p>
            In this session, I'll be joined by{" "}
            <a href="https://twitter.com/auth0">Auth0</a> colleague{" "}
            <a href="https://twitter.com/degrammer">Ruben Restrepo</a> to:
          </p>
          <ul>
            <li>convert the API to use TypeScript;</li>
            <li>
              add some testing and linting tools to improve development
              processes; and
            </li>
            <li>set up GitHub actions to run the testers and linters.</li>
          </ul>
        </section>
      </Layout>
    </>
  )
}

export default Development
