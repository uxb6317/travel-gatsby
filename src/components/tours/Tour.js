import React from "react"
import BackgroundImage from "gatsby-background-image"
import { navigate } from "gatsby"
import { FaMapMarkerAlt } from "react-icons/fa"

const Tour = ({ tour }) => {
  return (
    <>
      {tour && (
        <article
          onClick={() => navigate(`/tours/${tour.slug}`)}
          className="card card-animate cursor-pointer"
        >
          <div>
            <div style={{ height: "17.5rem" }} className="w-full">
              <BackgroundImage
                Tag="section"
                fluid={tour.images[0].fluid}
                className="h-full w-full bg-center bg-cover flex justify-start items-end"
              >
                <div className="border w-full bg-white p-3 flex flex-col items-start">
                  <h2 className="capitalize text-xl font-semibold">
                    {tour.name}
                  </h2>
                  <div className="w-full flex justify-between items-end">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-purple-700" />
                      <h2 className="capitalize text-lg">{tour.country}</h2>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="bg-green-500 rounded-full px-2 text-white mb-1">
                        {tour.days} days
                      </p>
                      <p>From ${tour.price}</p>
                    </div>
                  </div>
                </div>
              </BackgroundImage>
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default Tour
