import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/GlobalComponents/Hero'
import WhyPaws from '../components/HomePage/WhyPaws'
import Footer from '../components/HomePage/Footer'


const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
  <Hero
    img={data.img.childImageSharp.fluid} 
    title="Wanna go to Paws...for dogs?"
    styleClass="default-background"
  />
  <WhyPaws />
  <Footer />
  </Layout>
)

export const query = graphql `
{
  img: file(relativePath:{eq:"hero1.jpg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage
