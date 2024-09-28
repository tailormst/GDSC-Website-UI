import React, { useState } from 'react';
import './Header.css'; 
import gdgLogo from './Images/gdglogo.png';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
        document.body.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
        document.querySelector('.nav-bar').setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header>
            <nav>
                <div className="nav-bar">
                    <div className="left-nav">
                        <a href="/">
                            <img src={gdgLogo} alt="GDG-logo" />
                        </a>
                        <div className="brand-name">GDG RCOEM</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-a">
                            <span className="link-here">
                                <a href="#">Home</a>
                                <a href="#event">Event</a>
                                <a href="#team">Team</a>
                                <a href="#alumin">Alumni</a>
                                <a href="#contact">Contact</a>
                            </span>

                            <div className="theme-switch">
                                <input type="checkbox" id="theme-toggle" onChange={toggleTheme} />
                                <label htmlFor="theme-toggle" className="theme-label">
                                    <span className="switch">
                                        <span className="sun-icon">☀️</span>
                                        <span className="moon-icon">🌙</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;