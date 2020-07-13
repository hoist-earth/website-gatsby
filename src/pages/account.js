import React from "react"
import Layout from "../components/layout"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"

const Account = () => {
  const { user, getAccessTokenSilently } = useAuth0()

  const createCustomer = () => {
    getAccessTokenSilently().then(token => {
      console.log(token)
      fetch(process.env.GATSBY_HOIST_API + "/user/manifestStripeCustomer", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(res => res.json())
        .then(json => console.log(json))
    })
  }

  return (
    <Layout>
      <h2>Account</h2>
      <p>Welcome to your account page</p>
      <p>
        <button onClick={createCustomer}>Create Customer</button>
      </p>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </Layout>
  )
}

export default withAuthenticationRequired(Account)
