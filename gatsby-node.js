const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      tours: allContentfulTour {
        nodes {
          slug
        }
      }
    }
  `)

  data.tours.nodes.forEach(({ slug }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug,
      },
    })
  })
}
