import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import imageUrlBuilder from '@sanity/image-url'

export const query = graphql`
  query($slug: String) {
    program: sanityProgram(slug: {current: {eq: $slug}}) {
      name
      slug {
        current
      }
      content
      image {
        asset {
          _id
        }
        crop {
          top
          bottom
          left
          right
        }
        hotspot {
          x
          y
          width
          height
        }
      }
    }
  }
`

const Program = ({ data }) => {

  const builder = imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECTID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  })

  return (
    <Layout>
      <SEO title={data.program.name + " | Programs"} />
      <img className="fullwidth" src={builder.image(data.program.image).width(960).height(320).url()} alt={data.program.name} />
      <section>
        <h2>{data.program.name}</h2>
        <p>{data.program.content}</p>
      </section>
    </Layout>
  )
}


export default Program