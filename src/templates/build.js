import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import moment from "moment-timezone"
import BlockContent from "@sanity/block-content-to-react"

export const query = graphql`
  query($slug: String) {
    episode: sanityEpisode(slug: { current: { eq: $slug } }) {
      name
      episode
      description
      _rawOutline
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
    }
  }
`

const Episode = ({ data, pageContext }) => {
  const { episode } = data
  const { previous, next } = pageContext

  const streamDone = moment().diff(episode.stream_date) > 0
  const episodeAired = moment().diff(episode.aired_date) > 0

  const stream_date = moment(episode.stream_date).tz("Australia/Melbourne")
  const aired_date = moment(episode.aired_date).tz("Australia/Melbourne")

  const pageTitle = streamDone
    ? `Episode ${episode.episode} — ${episode.name}`
    : `Live Coding: ${episode.name}`

  const timezone = moment.tz
    .zone("Australia/Melbourne")
    .abbr(moment(episode.stream_date))

  const HeroImage = () => {
    if (episodeAired && episode.youtube_id)
      return (
        <div className="fullwidthIframe">
          <iframe
            title={pageTitle}
            src={
              "https://www.youtube-nocookie.com/embed/" +
              episode.youtube_id +
              "?rel=0"
            }
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )

    if (streamDone && episode.aired_image.asset.url)
      return (
        <img
          className="fullwidth"
          src={episode.aired_image.asset.url}
          alt={pageTitle}
        />
      )

    return (
      <img
        className="fullwidth"
        src={episode.stream_image.asset.url}
        alt={pageTitle}
      />
    )
  }

  const SocialMediaImage = () => {
    if (streamDone && episode.aired_image.asset.url)
      return episode.aired_image.asset.url

    return episode.stream_image.asset.url
  }

  const Airing = () => {
    if (!streamDone)
      return (
        <p className="airing">
          <i className="icon-twitch"></i>
          <a href="https://twitch.tv/bendechrai">
            Streaming live on Twitch:{" "}
            {stream_date.format("dddd Do MMMM [at] h.mma")} {timezone}
          </a>
        </p>
      )

    if (!episode.aired_date) return null

    const prefix = episodeAired
      ? "This episode aired on"
      : "This episode will air on"
    return (
      <p className={"airing " + (episodeAired ? "aired" : "pending")}>
        <i className="icon-youtube-play"></i>
        <span>
          {prefix} {aired_date.format("dddd Do MMMM [at] h.mma")} {timezone}.
        </span>
      </p>
    )
  }

  const LinkOrEmptyElement = ({ episode, prepend, append }) => {
    if (episode) {
      const streamDone = moment().diff(episode.stream_date) > 0
      if (streamDone)
        return (
          <Link to={"/build/" + episode.slug.current}>
            {prepend}
            Ep {episode.episode}: {episode.name}
            {append}
          </Link>
        )
      return (
        <Link to={"/build/" + episode.slug.current}>
          {prepend}
          Live Stream: {episode.name}
          {append}
        </Link>
      )
    }
    return <div />
  }

  return (
    <>
      <Layout>
        <SEO
          title={episode.name + " | Build"}
          description={episode.description}
          meta={[
            {
              name: `twitter:image`,
              content: SocialMediaImage(),
            },
            {
              name: `og:image`,
              content: SocialMediaImage(),
              prefix: `og: http://ogp.me/ns#`,
            },
          ]}
        />
        <HeroImage />
        <section>
          <nav className="episodes">
            <LinkOrEmptyElement episode={previous} prepend="&laquo; " />
            <LinkOrEmptyElement episode={next} append=" &raquo;" />
          </nav>
          <h2>{pageTitle}</h2>
          <Airing />
          <BlockContent blocks={episode._rawOutline} />
        </section>
      </Layout>
    </>
  )
}

export default Episode
