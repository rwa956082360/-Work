import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import CSS

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/about" className="nav-link">Home</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/courses" className="nav-link">Courses</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
