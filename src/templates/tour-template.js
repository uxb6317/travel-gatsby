import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { Carousel } from "react-responsive-carousel"
import { FaCalendar, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa"

import Layout from "../components/layout"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: { description },
  } = data.tour
  const images = data.tour.images
  const journey = data.tour.journey

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:mt-16 lg:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-grow">
            <Carousel>
              {images.map((image, index) => (
                <div>
                  <Image className="w-full h-full" fluid={image.fluid} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="mx-6 p-4 self-start shadow lg:w-3/5 lg:mr-0">
            <div className="flex items-center">
              <h2 className="text-3xl capitalize border-b mb-2 font-semibold tracking-wide inline-block mr-4">
                {name}
              </h2>
              <p className="bg-green-500 rounded-full px-2 text-white mb-1">
                {days} days
              </p>
            </div>
            <p>{description}</p>
            <div className="flex flex-col mt-4">
              <div className="flex items-center text-lg mb-1 pb-1 border-b">
                <FaDollarSign className="text-purple-700 mr-2" />
                <p>{price}</p>
              </div>
              <div className="flex items-center text-lg mb-1 pb-1 border-b">
                <FaCalendar className="text-purple-700 mr-2" />
                <p>{start}</p>
              </div>
              <div className="flex items-center text-lg">
                <FaMapMarkerAlt className="text-purple-700 mr-2" />
                <p>{country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-10 shadow p-4 border lg:mx-0 lg:mt-0">
          {console.log(journey)}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      images {
        fluid(quality: 80, maxWidth: 700) {
          ...GatsbyContentfulFluid
        }
      }
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
    }
  }
`

export default TourTemplate
