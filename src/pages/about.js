import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/GlobalComponents/Hero'
import Title from '../components/GlobalComponents/Title'



const About = ({data}) => (

    <Layout>
        <SEO title="Home" />
    <Hero
        img={data.img.childImageSharp.fluid} 
        // title="About Us"
        styleClass="about-background"
    />
    <section className="">
            <div className="container">
                <Title title="About Paws...for Dogs"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-left py-4">
                        <p className="lead text-muted">
                        Paws...for dogs opened its doors in 1994.  The founders, all of them dog fanatics, shared 
                        a vision to create a unique experience for both dog owners and their dogs.  Yes, we encourage 
                        you to bring in your dog(s) when you stop by! With a lot of hard work and your patronage, we 
                        believe we've succeded. For instance, Modern Dog magazine for the past ten years has awared 
                        Paws...for dogs, the "two paws up" award for the best dog store and service provider in the state of Oregon.  We certainly appreciate the wards, but the real reward and measure of our 
                        success is your return visit.  We look forward to many more years of service.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export const query = graphql `
{
    img: file(relativePath:{eq:"cody2.jpg"}){
        childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid
        }
        }
    }
}
`

export default About
