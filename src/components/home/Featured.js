import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Tour from "../tours/Tour"
import Title from "../Title"

const getTours = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      nodes {
        name
        price
        slug
        country
        days
        contentful_id
        images {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const Featured = () => {
  const data = useStaticQuery(getTours)
  const tours = data.featuredTours.nodes
  console.log(tours[0])

  return (
    <div className="section section-spaced xl:px-0">
      <Title title="featured" subtitle="tours" />
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
        className="mt-10 w-full grid gap-4 md:gap-10"
      >
        <Tour tour={tours[0]} />
        <Tour tour={tours[0]} />
        <Tour tour={tours[0]} />
      </div>
      <Tour />
    </div>
  )
}

export default Featured
