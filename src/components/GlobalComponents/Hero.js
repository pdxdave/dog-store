import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Hero({img, styleClass, title}) {
    return (
        <BackgroundImage 
            className={styleClass}
            fluid={img}
        >
        <h1 className="title text-black text-uppercase text-center hero-title">
            {title}
        </h1>
        </BackgroundImage>
    )
}

