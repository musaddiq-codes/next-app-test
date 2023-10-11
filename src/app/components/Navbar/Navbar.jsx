
"use client"


import React, { useState } from 'react';
import styles from './Navbar.module.css'; // Create a file named Navbar.css for your styles
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Logo</h1>
                <ul className={`${styles.nav_list} ${isActive ? `${styles.active}` : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={styles.burger_menu} onClick={toggleMenu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
