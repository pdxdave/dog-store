import React from 'react'

export default function Title(props) {
    return (
        <div className="row">
            <div className="col-10 col-sm-8 text-center mx-auto">
                <h1 className=" title-page">{props.title}</h1>
            </div>
        </div>
    )
}
