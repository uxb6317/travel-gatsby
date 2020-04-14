import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "mountains.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="w-100 h-screen-16">
      <BackgroundImage
        Tag="section"
        fluid={[
          `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.25) 25%)`,
          data.file.childImageSharp.fluid,
        ]}
        backgroundColor={`#040e18`}
        className="h-full w-full bg-center bg-cover flex justify-center items-center"
      >
        <div className="text-white flex flex-col items-center text-center px-4">
          <h2 className="uppercase text-6xl tracking-widest">
            Continue Exploring
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            labore ut rerum similique ullam doloremque?
          </p>
          <Link to="/tours" className="mt-6 btn btn-clear btn-xl">
            Explore Tours
          </Link>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default HomeHero
