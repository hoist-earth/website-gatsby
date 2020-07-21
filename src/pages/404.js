import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({ location }) => (
  <>
    <Layout fourohfour={true}>
      <SEO title="ʕ•ᴥ•ʔ" location={location} />
      <section id="intro"></section>
    </Layout>
    <div className="fourohfour-overlay">
      <h1>ʕ•ᴥ•ʔ</h1>
      <p>I'm sorry. I can't find that page.</p>
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  </>
)

export default NotFoundPage
