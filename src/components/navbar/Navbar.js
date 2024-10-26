import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import logo from '../../assets/logo.webp';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" className="logo" />
                <span className="company-name">Employee-Hub</span>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>

                {/* Services link with dropdown */}
                <div className="nav-item dropdown">
                    <Link to="/services" className="dropdown-toggle">Services</Link>
                    <div className="dropdown-menu">
                        <Link to="/services/create" className="dropdown-item">Create Employee</Link>
                        <Link to="/services/update" className="dropdown-item">Update Employee</Link>
                        <Link to="/services/delete" className="dropdown-item">Delete Employee</Link>
                    </div>
                </div>

                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
