import React from "react"
import Layout from "./layout"
import { useAuth0 } from "@auth0/auth0-react"

const AuthRedirectMessage = () => {
  const { isLoading } = useAuth0()
  if (isLoading) return null
  return (
    <>
      <Layout blurpage={true}>
        <section id="intro"></section>
      </Layout>
      <div className="blurpage-overlay">
        <h1>ʕ•ᴥ•ʔ</h1>
        <h2>Knock knock. Who's there?</h2>
        <p>Redirecting to login page.</p>
      </div>
    </>
  )
}

export default AuthRedirectMessage
