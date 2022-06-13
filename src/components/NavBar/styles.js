import styled from 'styled-components';



export const Header = styled.header`
  position: relative;
  display: flex;
  height: 60px;
  z-index: 1030;
  background-color: #28a745;
  box-shadow: 0px 4px 8px #0f3c19;

`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const Anchor = styled.a`
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
`;

export const Img = styled.img`
  color: #888;
  border-radius: 20%;
  height: 80%;
  text-decoration: none;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 8px #0f3c19; 
`;
