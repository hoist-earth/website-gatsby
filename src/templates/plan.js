import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String) {
    plan: sanityPlan(slug: {current: {eq: $slug}}) {
      name
      description
      monthly_donation
      stripe_pricing_plan_id
    }
  }
`

const Plan = ({ data }) => {

  const subscribe = (plan) => {
    alert(plan.stripe_pricing_plan_id)
  }

  return (
    <Layout>
      <SEO title={data.plan.name + " | Plans"} />
      <section>
        <h2>{data.plan.name}</h2>
        <p>{data.plan.description}</p>
        <p>Monthly: ${data.plan.monthly_donation}</p>
        <p><button onClick={() => subscribe(data.plan)} >Subscribe Now</button></p>
      </section>
    </Layout>
  )
}

export default Plan