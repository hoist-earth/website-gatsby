import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuth0 } from "@auth0/auth0-react"
import { Link, graphql } from "gatsby"
import imageUrlBuilder from "@sanity/image-url"
import useFeatureFlags from "../hooks/use-feature-flags"

export const query = graphql`
  {
    programs: allSanityProgram(filter:{ highlighted:{eq:true}}) {
      edges {
        node {
          name
          slug {
            current
          }
          description
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
    }
  }
`

const IndexPage = ({ data }) => {
  const { featureAuth, featurePrograms } = useFeatureFlags()

  const builder = imageUrlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECTID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  })

  const CTA = () => {
    const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0()

    if (!featureAuth) return null

    if (isLoading || isAuthenticated) return null

    return (
      <div className="cta">
        <button onClick={loginWithRedirect} className="button">Login <i className="icon-signin"></i></button>
        <span>- or -</span>
        <button onClick={loginWithRedirect} className="button">Sign Up Today <i className="icon-edit2"></i></button>
      </div>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />

      <section id="intro">
        <h2>Fund effective climate change programs with a single payment</h2>
        <p>Whether you’re offsetting your annual family carbon footprint or your work-related travel impact, Hoist takes the hard work out of donating effectively.</p>
        <CTA />
        <h3>This platform is still under development.</h3>
        <p className="join-us-content"><span>Want to join the development process?</span> <Link to="/build" className="button">Build Hoist with us <i className="icon-laptop"></i></Link></p>
        <p className="join-us-content"><span>Want to join the community and help define this platform?</span> <a href="https://community.hoist.earth/" className="button" target="hoist-community">Join the Community <i className="icon-comments"></i></a></p>
      </section>

      <section id="features">
        <h2>Hoist lets you engage however you like</h2>
        <p>From set-and-forget to an active community, Hoist is designed to work for everyone.</p>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-check1" />
            <h3>Set and Forget</h3>
            <p>We willl always invest in the best programs we can find. This option gives you the peace of mind that you’re contributing as effectively as we are. If you like, you can also join the community forum for more involvement, but there’s certainly no requirement for this.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-comments-alt" />
            <h3>Community Driven</h3>
            <p>We will always listen to our community. If you have an idea of where to invest, we’re all ears. The old adage of many hands making light work is certainly the differantiator here.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-box">
            <i className="icon icon-dashboard" />
            <h3>Always Informed</h3>
            <p>However involved you are, you’ll always know what’s happening. From clear reports on where we’re investing money, to the latest news on the current climate fixing strategies, you’ll always know how you’re helping.</p>
          </div>
        </div>
      </section>

      <section id="programs">
        {featurePrograms &&
          data.programs.edges.map(program => (
          <div className="program">
            <h3><Link to={"programs/" + program.node.slug.current}>
              {program.node.name}
            </Link></h3>
            <p><Link to={"programs/" + program.node.slug.current}>
              <img src={builder.image(program.node.image).width(300).height(150).url()} alt={program.node.name} />
            </Link></p>
            <p>{program.node.description}</p>
          </div>
        ))}
      </section>

    </Layout>
  )
}

export default IndexPage
