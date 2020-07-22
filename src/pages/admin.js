import React from "react"
import Layout from "../components/layout"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import SEO from "../components/seo"
import AuthRedirectMessage from "../components/auth-redirect-message"
import CheckRole from "../components/check-role"

const Admin = ({ location }) => {
  const { getAccessTokenSilently } = useAuth0()

  const testAdmin = () => {
    getAccessTokenSilently().then(token => {
      fetch(process.env.GATSBY_HOIST_API + "/admin/test", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
        .then(res => res.json())
        .then(res => {
          alert(JSON.stringify(res))
        })
    })
  }

  return (
    <Layout>
      <CheckRole roles={["admin"]}>
        <SEO title="Admin" location={location} />
        <section>
          <h1>Admin Dashboard</h1>
          <button onClick={testAdmin}>Test Admin</button>
        </section>
      </CheckRole>
    </Layout>
  )
}

export default withAuthenticationRequired(Admin, {
  onRedirecting: () => <AuthRedirectMessage />,
})
