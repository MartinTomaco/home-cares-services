import React from 'react';
import { Nav, Anchor } from './styles';
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md';

const SIZE = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Anchor href='/'>
        <MdHome size={SIZE} />
      </Anchor>
      <Anchor href='/'>
        <MdFavorite size={SIZE} />
      </Anchor>
      <Anchor href='/'>
        <MdPerson size={SIZE} />
      </Anchor>
    </Nav>
  );
};
