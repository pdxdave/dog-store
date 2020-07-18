import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/GlobalComponents/Hero'
import Title from '../components/GlobalComponents/Title'



const Contact = ({data}) => (

    <Layout>
        <SEO title="Home" />
    <Hero
        img={data.img.childImageSharp.fluid} 
        // title="About Us"
        styleClass="about-background"
    />
    <section className="">
            <div className="container">
                <Title title="Contact"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto">
                      <form action="http://formspree.io/dr.hoochie.love@hotmail.com" method="POST">
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
                         <button type="submit" className="btn btn-block text-capitalize my-5" style={{border: "1px solid gray"}}>Submit</button>
                      </form>
                    </div>
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

export default Contact
