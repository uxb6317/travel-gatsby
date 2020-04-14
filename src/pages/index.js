import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/HomeHero"
import About from "../components/home/About"
import Services from "../components/home/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
  </Layout>
)

export default IndexPage
