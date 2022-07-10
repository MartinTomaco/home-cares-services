import React from 'react';
import logo from '../../assets/logo_hcs.png'
import { MdMenu } from 'react-icons/md';
import '../NavBar/styles.css';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <header>
      <nav>
        <section className='navLeft'>

          <img className='imgLogo' alt={'logo'} src={logo}></img>

        </section>


        <section className='navRight'>

            <button>ES</button>
            <button>EN</button>

            <MdMenu size={SIZE} />

        </section>
      </nav>
    </header>
  );
};
