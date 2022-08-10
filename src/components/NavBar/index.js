import React, { useContext } from 'react';
import { HamburMenu } from '../HamburMenu';
import LangContext from '../../context/LangContext';
import logo from '../../assets/logo_hcs.png'
import '../NavBar/styles.css';

export const NavBar = () => {
  const { lang, setLang } = useContext(LangContext)
  const handleClick = (event) => {
     console.log('langFromContext:',lang)
    if (event.target.innerText === 'ES') { setLang('ES') }
    if (event.target.innerText === 'EN') { setLang('EN') }
  }
  return (
    <header>
      <nav className='mainNav'>
        <section className='navLeft'>

          <img className='imgLogo' alt={'logo'} src={logo}></img>

        </section>


        <section className='navRight'>

          <button onClick={(event) => handleClick(event)}>ES</button>
          <button onClick={(event) => handleClick(event)}>EN</button>
          {/* <HamburMenu/> */}
          

        </section>
        
      </nav>
      
    </header>
  );
};
