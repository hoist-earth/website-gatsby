import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />

      <section id="intro">
        <h2>Fund effective climate change programs with a single payment</h2>
        <p>Whether you’re offsetting your annual family carbon footprint or your work-related travel impact, Hoist takes the hard work out of donating effectively.</p>
        <div className="cta">
          <button onClick={() => alert('auth')} className="button">Login <i className="icon-signin"></i></button>
          <span>- or -</span>
          <button onClick={() => alert('auth')} className="button">Sign Up Today <i className="icon-edit2"></i></button>
        </div>
      </section>

      <section id="features">
        <h2>Hoist lets you engage however you like</h2>
        <p>From set-and-forget to an active community, Hoist is designed to work for everyone.</p>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-check1" />
            <h3>Set and Forget</h3>
            <p>We willl always invest in the best programs we can find. This option gives you the peace of mind that you’re contributing as effectively as we are. If you like, you can also join the community forum for more involvement, but there’s certainly no requirement for this.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-comments-alt" />
            <h3>Community Driven</h3>
            <p>We will always listen to our community. If you have an idea of where to invest, we’re all ears. The old adage of many hands making light work is certainly the differantiator here.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-dashboard" />
            <h3>Always Informed</h3>
            <p>However involved you are, you’ll always know what’s happening. From clear reports on where we’re investing money, to the latest news on the current climate fixing strategies, you’ll always know how you’re helping.</p>
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
