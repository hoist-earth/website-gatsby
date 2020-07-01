import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { useStaticQuery } from 'gatsby'

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
          title="Creating the Hoist API | Build"
          description="In this session, I'll be creating a new Express API from scratch, and creating new content types in Sanity in preparation for the joint stream on Monday with Thor Schaeff from Stripe."
          meta={{
            name: `twitter:image`,
            content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-02.png`,
          }, {
            name: `og:image`,
            content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-02.png`,
            prefix: `og: http://ogp.me/ns#`,
          }} />
        <img className="fullwidth" src="/images/build/streams/2020-07-02.png" alt="Live Coding: Creating the Hoist API" />
        <section>
          <p><a href="https://twitch.tv/bendechrai">
            <span role="img" aria-label="calendar">📆</span>{" "}
            Streaming live on Twitch: Thursday 2nd July at 1pm AEST
          </a></p>
          <h2>2nd July 2020 - Creating the Hoist API</h2>
          <p>
            In this session, I'll be creating a new Express API from scratch, and creating new content
            types in Sanity in preparation for the joint stream on Monday with Thor Schaeff from Stripe.
          </p>
          <p>
            By the end of the stream, we should have:
          </p>
          <ul>
            <li>Set up a new Express API;</li>
            <li>Deployed the API to Vercel;</li>
            <li>Created an endpoint to update users in Auth0 via Management API:
              <ul>
                <li>
                  we'll be storing the Stripe Customer ID in there later;
                </li>
              </ul>
            </li>
            <li>Created a Subscription Plan content type in Sanity; and</li>
            <li>Made space for a Stripe ID to link it to a subscription.</li>
          </ul>
        </section>
      </Layout>
    </>
  )
}

export default Development