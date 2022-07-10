import React from 'react';
import logo from '../../assets/logo_hcs.png'
import { MdSearch, MdMenu } from 'react-icons/md';
import '../NavBar/styles.css';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <a href='/'>
          <img className='imgLogo' alt={'logo'} src={logo}></img>
        </a>
        <a href='/'>
          <MdSearch size={SIZE} />
        </a>
        <a href='/'>
          <MdMenu size={SIZE} />
        </a>
      </nav>
    </header>
  );
};
