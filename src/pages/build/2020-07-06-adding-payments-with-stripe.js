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
          title="Adding Payments with Stripe | Build"
          description="In this session, I'll be joined by Thor Schaeff from Stripe in order to add subscription payments to Hoist."
          meta={{
            name: `twitter:image`,
            content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-06.png`,
          }, {
            name: `og:image`,
            content: `${site.siteMetadata.siteUrl}/images/build/streams/2020-07-06.png`,
          }} />
        <img className="fullwidth" src="/images/build/streams/2020-07-06.png" alt="Live Coding: Adding Payments with Stripe" />
        <section>
          <p><a href="https://twitch.tv/bendechrai">
            <span role="img" aria-label="calendar">📆</span>{" "}
            Streaming live on Twitch: Monday 6th July at 1pm AEST
          </a></p>
          <h2>6th July 2020 - Adding Payments with Stripe</h2>
          <p>
            In this session, I'll be joined by <a href="https://twitter.com/thorwebdev">Thor Schaeff</a>
            {" "}
            from <a href="https://twitter.com/stripe">Stripe</a> in order to add subscription payments
            to Hoist.
          </p>
          <p>
            Join us to learn how to:
            </p>
          <ul>
            <li>add Stripe Checkout and the new customer portal to your Gatsby app;</li>
            <li>link your Auth0 users with Stripe customers;</li>
            <li>pull current subscription information from the Stripe API; and</li>
            <li>programatically cancel and manage your users subscriptions.</li>
          </ul>
        </section>
      </Layout>
    </>
  )
}

export default Development
