/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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
      component: require.resolve('./src/templates/program.js'),
      context: { slug: edge.node.slug.current },
    })
  })

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
      component: require.resolve('./src/templates/plan.js'),
      context: { slug: edge.node.slug.current },
    })
  })
}