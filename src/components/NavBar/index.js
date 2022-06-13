import React from 'react';
import logo from '../../assets/logo_hcs.png'
import { Nav, Anchor, Img} from './styles';
// import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Anchor href='/'>
        <Img alt={'logo'} src={logo}></Img>
      </Anchor>
      <Anchor href='/'>

      </Anchor>
      <Anchor href='/'>

      </Anchor>
    </Nav>
  );
};
