import React, { useState, useContext } from 'react';
import LangContext from '../../context/LangContext';
import logo from '../../assets/logo_hcs.png'

import '../HamburMenu/styles.css';

export const HamburMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { lang } = useContext(LangContext)

    const handleClick = (event) => {
        setShowMenu(!showMenu)
        console.log('ShowMenu:', showMenu)
        console.log('Language:', lang)
    }
    return (
        <>

            <div
                onClick={(event) => handleClick(event)}
                className={showMenu ? 'menu-btn close' : 'menu-btn'}

            >
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={showMenu ? 'menu show' : 'menu'}>
                <div className={showMenu ? 'menu-branding show' : 'menu-branding'}>

                        <img className='imgLogo' alt={'logo'} src={logo}></img>

                </div>

                <ul className={showMenu ? 'menu-nav show' : 'menu-nav'}>

                    <hr/>
                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            Type of services
                        </a>
                    </li>
                    <hr/>
                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            Contact Us
                        </a>
                    </li>
                    <hr/>
                </ul>
            </nav>
        </>
    );
};
