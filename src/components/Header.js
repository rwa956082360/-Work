import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'; // Import CSS

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/home" className="nav-link">หน้าแรก</Link></li>
                    <li><Link to="/about" className="nav-link">เกี่ยวกับเรา</Link></li>
                    <li><Link to="/contact" className="nav-link">ติดต่อเรา</Link></li>
                    <li><Link to="/courses" className="nav-link">หลักสูตร</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
