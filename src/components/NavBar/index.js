import React, {useContext} from 'react';
import LangContext from '../../context/LangContext';
import logo from '../../assets/logo_hcs.png'
import { MdMenu } from 'react-icons/md';
import '../NavBar/styles.css';

const SIZE = '32px';

export const NavBar = () => {
  const context = useContext(LangContext)
  const handleClick = (event) =>{
    console.log('Hola...',event.target.innerText)
    console.log('context: ', context)
  }
  return (
    <header>
      <nav>
        <section className='navLeft'>

          <img className='imgLogo' alt={'logo'} src={logo}></img>

        </section>


        <section className='navRight'>

            <button onClick={(event)=>handleClick(event)}>ES</button>
            <button onClick={(event)=>handleClick(event)}>EN</button>

            <MdMenu size={SIZE} />

        </section>
      </nav>
    </header>
  );
};
