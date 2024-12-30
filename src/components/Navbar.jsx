import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu toggle state
    const [isScrolled, setIsScrolled] = useState(false); // Scroll state

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Add background after scrolling 50px
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <p className="logo">My Portfolio | Chamodya Ganegamage</p>
            {/* Toggle Button */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            {/* Navigation Links */}
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
