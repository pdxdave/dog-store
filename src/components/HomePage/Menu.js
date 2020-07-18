import React, { Component } from 'react'
import Title from '../GlobalComponents/Title'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category 
    })
    let tempCategories = new Set (tempItems) // this is an object
    let categories = Array.from(tempCategories) // turn it into an array
    categories=['all', ...categories]
    return categories;
}

export default class Menu extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: props.items.edges,
            dogItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }

    handleItems = (category) => {
        let tempItems = [...this.state.items]
        if(category === 'all'){
            this.setState(() => {
                return {dogItems: tempItems}
            })
        } else {
            let items = tempItems.filter(({node}) => node.category === category);
            this.setState(() => {
                return {dogItems: items}
            })
        }
    }

    render() {
        console.log(this.state.categories)
        if(this.state.items.length > 0){
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Top Selling Accessories" />
                           {/* categories */}
                            <div className="row mb-5">
                                <div className="col-10 mx-auto text-center">
                                    {this.state.categories.map((category, index) => {
                                        return (
                                            <button 
                                                type="button"
                                                onClick={() => {this.handleItems(category)}} 
                                                className="btn text-capitalize m-3 btn-settings"
                                                key={index}>{category}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* items */}
                            <div className="row">
                                {this.state.dogItems.map(({node}) => {
                                    return (
                                        <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                            {/* dog item pics */}
                                            <div>
                                                <Img fixed={node.image.fixed} />
                                            </div>
                                            {/* dog item text */}
                                            <div className="flex-grow-1 px-3">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0">{node.title}</h6>
                                                    <h6 className="mb-0">${node.price}</h6>
                                                </div>
                                                <p className="text-muted">{node.description.description}</p>
                                            </div>
                                        </div> 
                                    )
                                })}
                            </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="top selling accessories"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center">
                                <h1>Wow, there are no accessories!</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        
    }
}
