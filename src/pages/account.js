import React from 'react'
import Layout from '../components/layout'
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

const Account = () => {
  const { user } = useAuth0()
  return (
    <Layout>
      <h2>Account</h2>
      <p>Welcome to your account page</p>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </Layout>
  )
}

export default withAuthenticationRequired(Account)