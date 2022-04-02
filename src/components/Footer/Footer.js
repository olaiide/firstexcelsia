import React from "react";
import Logo from "../../assets/Logo.svg";
import { Container, Wrapper } from "./FooterElements";
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <div className='Logo__'>
          <img src={Logo} alt='logo' />
        </div>
        <ul>
          <li>Blog</li>
          <li>Privacy Policy </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <p>copyright Rodufy 2022</p>
      </Wrapper>
    </Container>
  );
};

export default Footer;
