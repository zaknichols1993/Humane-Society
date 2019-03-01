import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Add Dog</NavLink></li>
            <li><NavLink to="/">Add Cat</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">JR</NavLink></li>  
        </ul>
    )
}

export default SignedInLinks;