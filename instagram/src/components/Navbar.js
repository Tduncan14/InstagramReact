import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
        <div className="nav-wrapper white" >
          <a href="/" className="brand-logo left">Instagram</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )




}








export default Navbar