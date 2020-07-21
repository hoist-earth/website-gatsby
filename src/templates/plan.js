import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"
import getStripe from "../utils/stripe"

export const query = graphql`
  query($slug: String) {
    plan: sanityPlan(slug: { current: { eq: $slug } }) {
      name
      description
      monthly_donation
      stripe_pricing_plan_id
    }
  }
`

const Plan = ({ data, location }) => {
  const { getAccessTokenSilently } = useAuth0()

  const subscribe = plan => {
    getAccessTokenSilently().then(token => {
      fetch(process.env.GATSBY_HOIST_API + "/checkout/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          stripePricingPlanId: plan.stripe_pricing_plan_id,
        }),
      })
        .then(res => res.json())
        .then(async checkout => {
          const stripe = await getStripe()
          const { error } = await stripe.redirectToCheckout({
            sessionId: checkout.id,
          })
          if (error) alert(error.message)
        })
    })
  }

  return (
    <Layout>
      <SEO title={data.plan.name + " | Plans"} location={location} />
      <section>
        <h2>{data.plan.name}</h2>
        <p>{data.plan.description}</p>
        <p>Monthly: ${data.plan.monthly_donation}</p>
        <p>
          <button onClick={() => subscribe(data.plan)}>Subscribe Now</button>
        </p>
      </section>
    </Layout>
  )
}

export default Plan
