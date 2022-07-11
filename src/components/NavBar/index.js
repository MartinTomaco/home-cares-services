import React, { useContext } from 'react';
import LangContext from '../../context/LangContext';
import logo from '../../assets/logo_hcs.png'
import { MdMenu } from 'react-icons/md';
import '../NavBar/styles.css';


const SIZE = '32px';

export const NavBar = () => {
  const { lang, setLang } = useContext(LangContext)
  const handleClick = (event) => {
     console.log('langFromContext:',lang)
    if (event.target.innerText === 'ES') { setLang('ES') }
    if (event.target.innerText === 'EN') { setLang('EN') }
  }
  return (
    <header>
      <nav>
        <section className='navLeft'>

          <img className='imgLogo' alt={'logo'} src={logo}></img>

        </section>


        <section className='navRight'>

          <button onClick={(event) => handleClick(event)}>ES</button>
          <button onClick={(event) => handleClick(event)}>EN</button>

          <MdMenu size={SIZE} />

        </section>
      </nav>
    </header>
  );
};
