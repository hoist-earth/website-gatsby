/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // BUILD PROGRAM PAGES

  const programResult = await graphql(`
    {
      allSanityProgram {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (programResult.errors) {
    throw programResult.errors
  }

  const programs = programResult.data.allSanityProgram.edges || []

  programs.forEach((edge, index) => {
    const path = `/programs/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/program.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // BUILD PLAN PAGES

  const planResult = await graphql(`
    {
      allSanityPlan {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (planResult.errors) {
    throw planResult.errors
  }

  const plans = planResult.data.allSanityPlan.edges || []

  plans.forEach((edge, index) => {
    const path = `/plans/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/plan.js"),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })

  // BUILD EPISODE PAGES

  const episodeResult = await graphql(`
    {
      allSanityEpisode(sort: { fields: [episode], order: [DESC] }) {
        edges {
          node {
            name
            episode
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (episodeResult.errors) {
    throw episodeResult.errors
  }

  const episodes = episodeResult.data.allSanityEpisode.edges || []

  episodes.forEach((edge, index) => {
    const previous =
      index === episodes.length - 1 ? null : episodes[index + 1].node
    const next = index === 0 ? null : episodes[index - 1].node

    const path = `/build/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/build.js"),
      context: {
        slug: edge.node.slug.current,
        previous,
        next,
      },
    })
  })
}
