import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image/withIEPolyfill"

import Title from "../Title"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="section section-spaced xl:px-0">
      <Title title="about" subtitle="us" />
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full mr-6 rounded-lg overflow-hidden md:max-w-screen-md">
          <Image fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="flex flex-col">
          <h2 className="capitalize text-3xl tracking-wider mb-2 mt-4 md:-mt-2">
            Explore the difference
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex
            dolore, modi commodi vitae tempora. Quis quo in rerum ducimus.
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex
            dolore, modi commodi vitae tempora.
          </p>
          <Link
            to="/blog"
            className="btn btn-green btn-lg self-center mt-8 md:self-start"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
