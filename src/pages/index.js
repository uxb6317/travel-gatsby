import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/HomeHero"
import About from "../components/home/About"
import Services from "../components/home/Services"
import Featured from "../components/home/Featured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Services />
    <Featured />
  </Layout>
)

export default IndexPage
