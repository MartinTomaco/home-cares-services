import React from 'react';
import logo from '../../assets/logo_hcs.png'
import { Header, Nav, Anchor, Img } from './styles';
import { MdSearch, MdMenu } from 'react-icons/md';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Header>
      <Nav>
        <Anchor href='/'>
          <Img alt={'logo'} src={logo}></Img>
        </Anchor>
        <Anchor href='/'>
          <MdSearch size={SIZE} />
        </Anchor>
        <Anchor href='/'>
          <MdMenu size={SIZE} />
        </Anchor>
      </Nav>
    </Header>
  );
};
