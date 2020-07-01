import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const Development = () => {
  return (
    <>
      <Layout>
        <SEO title="Build" />
        <section>
          <h2>Build Hoist with us</h2>
          <p>One of the core principles of Hoist is transparency, and that starts with the development of the platform. If you're a software developer and want to join us on the journey of building Hoist, you can join in the live coding streams and watch the YouTube videos that outline the journey from start to end.</p>
          <h3>Upcoming Streams</h3>
          <div class="stream">
            <div className="description">
              <h4>
                <Link to="2020-07-02-creating-the-hoist-api" className="button">
                  2nd July 2020 - Creating the Hoist API
                </Link>
              </h4>
            </div>
            <div className="image">
              <Link to="2020-07-02-creating-the-hoist-api" className="button">
                <img src="/images/build/streams/2020-07-02.png" alt="Live Coding: Creating the Hoist API" />
              </Link>
            </div>
          </div>
          <div class="stream">
            <div className="description">
              <h4>
                <Link to="2020-07-06-adding-payments-with-stripe" className="button">
                  6th July 2020 - Adding Payments with Stripe
                </Link>
              </h4>
            </div>
            <div className="image">
              <Link to="2020-07-06-adding-payments-with-stripe" className="button">
                <img src="/images/build/streams/2020-07-06.png" alt="Live Coding: Adding Payments with Stripe" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Development