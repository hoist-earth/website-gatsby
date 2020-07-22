import React from "react"
import Layout from "../components/layout"
import { withAuthenticationRequired } from "@auth0/auth0-react"
import SEO from "../components/seo"
import AuthRedirectMessage from "../components/auth-redirect-message"
import CheckRole from "../components/check-role"

const Admin = ({ location }) => {
  return (
    <Layout>
      <CheckRole roles={["admin"]}>
        <SEO title="Admin" location={location} />
        <section>
          <h1>Admin Dashboard</h1>
        </section>
      </CheckRole>
    </Layout>
  )
}

export default withAuthenticationRequired(Admin, {
  onRedirecting: () => <AuthRedirectMessage />,
})
