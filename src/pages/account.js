import React from "react"
import Layout from "../components/layout"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import SEO from "../components/seo"
import AuthRedirectMessage from "../components/auth-redirect-message"

const Account = ({ location }) => {
  const { user, getAccessTokenSilently } = useAuth0()

  const openPortal = () => {
    getAccessTokenSilently().then(token => {
      fetch(process.env.GATSBY_HOIST_API + "/portal/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          stripePricingPlanId: "foo",
        }),
      })
        .then(res => res.json())
        .then(portal => {
          window.location.assign(portal.url)
        })
    })
  }

  return (
    <Layout>
      <SEO title="Account" location={location} />
      <section>
        <h2>Account</h2>
        <p>Welcome to your account page.</p>
        <p>
          <button onClick={openPortal}>Open Portal</button>
        </p>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </section>
    </Layout>
  )
}

export default withAuthenticationRequired(Account, {
  onRedirecting: () => <AuthRedirectMessage />,
})
