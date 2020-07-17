import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/GlobalComponents/Hero'



const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
  <Hero
    img={data.img.childImageSharp.fluid} 
    title="Wanna go to Paws...for dogs?"
    styleClass="default-background"
  />
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
