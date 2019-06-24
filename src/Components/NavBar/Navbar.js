/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Navbar.scss'
import logo from '../../logo.png'

class Navbar extends Component {
    render() {
        return (
        <nav className='navbar'>
            <a className='navbar-brand mx-5' href='#'> 
                <img src={logo} alt="logo"/>
            </a>
                <ul className='d-flex mx-auto'>
                    <li className='nav-item'> 
                        <a className='nav-link' href='#'>
                        Home
                        </a>
                    </li>
                    <li className='nav-item'> 
                        <a className='nav-link' href='#'>
                        About
                        </a>
                    </li>
                    <li className='nav-item active'> 
                        <a className='nav-link' href='#'>
                        Tours
                        </a>
                    </li>
                </ul>
        </nav>         
        );
    }
}

export default Navbar;