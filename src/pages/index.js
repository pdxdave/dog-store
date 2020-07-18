import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/GlobalComponents/Hero'
import WhyPaws from '../components/HomePage/WhyPaws'
import Menu from '../components/HomePage/Menu'
import Products from '../components/HomePage/Products'


const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid} 
      title="Wanna go to Paws...for dogs?"
      styleClass="default-background"
    />
    <WhyPaws />
    <Menu items={data.menu}/>
    <Products />
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
  menu:allContentfulDogItem{
    edges {
      node {
        id
        title
        description{
          description
        }
        price
        category
        image {
          fixed(width: 60, height: 60){
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
}
`

export default IndexPage
