import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import moment from "moment-timezone"

export const query = graphql`
  {
    episodes: allSanityEpisode(sort: { fields: [episode], order: [DESC] }) {
      edges {
        node {
          name
          episode
          description
          stream_image {
            asset {
              url
            }
          }
          stream_date
          aired_image {
            asset {
              url
            }
          }
          aired_date
          youtube_id
          slug {
            current
          }
        }
      }
    }
  }
`

const Build = ({ data }) => {
  const streams = data.episodes.edges.filter(episode => {
    return moment().diff(episode.node.stream_date) < 0
  })
  const videos = data.episodes.edges.filter(episode => {
    return (
      moment().diff(episode.node.stream_date) > 0 && episode.node.aired_date
    )
  })

  return (
    <>
      <Layout>
        <SEO title="Build" />
        <section>
          <h2>Build Hoist with us</h2>
          <p>
            One of the core principles of Hoist is transparency, and that starts
            with the development of the platform. If you're a software developer
            and want to join us on the journey of building Hoist, you can join
            in the live coding streams and watch the YouTube videos that outline
            the journey from start to end.
          </p>
          <h3>Upcoming Streams</h3>
          <div className="episodes">
            {streams.map(stream => (
              <div className="episode">
                <div className="description">
                  <h4>
                    <Link to={stream.node.slug.current}>
                      {moment(stream.node.stream_date)
                        .tz("Australia/Melbourne")
                        .format("Do MMMM")}
                      &mdash; {stream.node.name}
                    </Link>
                  </h4>
                </div>
                <div className="image">
                  <Link to={stream.node.slug.current}>
                    <img
                      className="fullwidth"
                      src={stream.node.stream_image.asset.url}
                      alt={"Live Coding: " + stream.node.name}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h3>Videos</h3>
          <p>
            Each live stream is converted to a curated video, and will appear
            here.
          </p>
          <div className="episodes">
            {videos.map(video => {
              const classname =
                moment().diff(video.node.aired_date) > 0 ? "aired" : "pending"
              return (
                <div className={"episode " + classname}>
                  <div className="title">
                    <h4>
                      <Link to={video.node.slug.current}>
                        Episode {video.node.episode} &mdash; {video.node.name}
                      </Link>
                    </h4>
                  </div>
                  <div className="airDate" hidden={classname === "aired"}>
                    This video will air on{" "}
                    {moment(video.node.aired_date)
                      .tz("Australia/Melbourne")
                      .format("Do MMMM")}
                  </div>
                  <div className="image">
                    <Link to={video.node.slug.current}>
                      <img
                        className="fullwidth"
                        src={video.node.aired_image.asset.url}
                        alt={
                          "Episode " +
                          video.node.episode +
                          " - " +
                          video.node.name
                        }
                      />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Build
