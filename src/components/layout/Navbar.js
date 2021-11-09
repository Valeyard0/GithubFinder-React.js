import React  from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Navbar = ({icon , title}) =>{    // Destructing
        return (
            <nav className ='navbar bg-primary'>
                <h3>
                    <i className = {icon}></i>
                    <Link to = '/'>{title}</Link>   

                    <ul>
                        <li>
                            <Link to = '/'>Home</Link>
                        </li>
                        <li>
                            <Link to = '/about'>About</Link> 
                        </li>
                    </ul>
                </h3> 
            </nav>
        )
    }


Navbar.defaultProps = {
    title : 'Github Finder',
    icon : 'fab fa-github'
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired 
}

export default Navbar;
