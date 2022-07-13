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
                    <div className="portrait">
                        <img className='imgLogo' alt={'logo'} src={logo}></img>
                    </div>
                </div>

                <ul className={showMenu ? 'menu-nav show' : 'menu-nav'}>
                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            HOME
                        </a>
                    </li>

                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            ABOUT ME
                        </a>
                    </li>

                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            MY WORK
                        </a>
                    </li>

                    <li className={showMenu ? 'nav-item show' : 'nav-item'}>
                        <a href="/" className="nav-link">
                            CONTACT ME
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
