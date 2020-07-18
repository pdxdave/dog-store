import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/GlobalComponents/Hero'
import Title from '../components/GlobalComponents/Title'


const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <Hero
      img={data.img.childImageSharp.fluid} 
      title="Contact"
      styleClass="about-background"
    />
    <section className="contact py-5">
            <Title title="contact us" />
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="http://formspree.io/dr.hoochie.love@hotmail.com" method="POST">
                        {/* name */}
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="john smith"
                            />
                            
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input 
                                type="email"
                                className="form-control"
                                name="_replyto"
                                id="email"
                                placeholder="john@email.com"
                            />
                        </div>
                        {/* description */}
                        <div className="form-group">
                            <label htmlFor="">Description</label>
                            <textarea
                                type="text"
                                className="form-control"
                                name="description"
                                id="description"
                                rows="6"
                                placeholder="description..."
                            ></textarea>
                        </div>
                        {/* submit */}
                        <button type="submit" className="btn btn-block text-capitalize mt-5" style={{border: "1px solid gray"}}>Submit</button>
                    </form>
                </div>
            </div>
        </section>

  </Layout>
)

export const query = graphql `
{
  img: file(relativePath:{eq:"contact2.jpg"}){
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage
