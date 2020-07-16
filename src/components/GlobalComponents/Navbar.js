import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/dog-paw.svg'
import {FaShoppingCart} from 'react-icons/fa'

export default class Navbar extends Component {

    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse show',
        links: [
            {
                id: 1,
                path: '/',
                desc: 'home'
            },
            {
                id: 2,
                path: '/about',
                desc: 'about'
            },
            {
                id: 3,
                path: '/services',
                desc: 'services'
            },
        ]

    }

    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({navbarOpen: false, css: "collapse navbar-collapse"})
        : this.setState({navbarOpen: true, css: "collapse navbar-collapse show"})
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                {/* brand */}
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="paws logo" className="paws-logo"/>
                    <spa className="ml-3">Paws for Dogs</spa>
                </Link>
                {/* toggle button */}
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* links */}
                <div className={this.state.css}>
                    <ul className="navbar-nav mx-auto" >
                        {this.state.links.map(link => {
                            return (
                                <li key={link.id} className="nav-item">
                                    <Link to={link.path} className="nav-link text-capitalize">
                                        {link.desc}
                                    </Link>  
                                </li>
                            )
                        })}
                        <li className="nav-item ml-sm-5">
                            <FaShoppingCart className="cart-icon"/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}