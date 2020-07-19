import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../images/white_paw.svg'
import {FaShoppingCart} from 'react-icons/fa'
import {FaPhoneSquareAlt} from 'react-icons/fa'

export default class Navbar extends Component {

    state = {
        navbarOpen: false,
        css: 'collapse navbar-collapse',
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
            {
                id: 4,
                path: '/contact',
                desc: 'contact'
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
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                {/* brand */}
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="paws logo" className="paws-logo"/>
                    <span className="ml-3">Paws...for dogs</span>
                    <FaPhoneSquareAlt className="ml-4 mr-2 phone-info"/>
                    <a href="tel:5554280940" style={{color: "#f2f2f2"}} className="phone-info">555-428-0940</a>
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
