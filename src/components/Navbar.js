import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper deep-purple darken-4">
            <div className="container">
            <Link to="/"><span className="brand-logo">Logo</span></Link>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/add">Add Post</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar