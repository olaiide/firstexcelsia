import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Close from "../../assets/Close.svg";
import Button from "../Button/Button";
import {
  ButtonContainer,
  Container,
  HeaderWrapper,
  LogoWrapper,
  StyledLink,
  Nav,
  TopWrapper,
  Top,
} from "./NavBarElements";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const hideHandler = () => {
    setShow(false);
  };
  
  const OpenMobileMenu = () => {
    setIsOpen(true)
  }
  return (
    <>
      <Container>

   
        <HeaderWrapper>
          
          <LogoWrapper>
            <img src={Logo} alt='Rodufy logo' />
          </LogoWrapper>
         
          <Nav click={isOpen}> 
  
          <ButtonContainer>
            <StyledLink to={"/register"}>
              <Button children={"Register"} width={"small"} height={"45px"} />
            </StyledLink>
            </ButtonContainer>
            <ButtonContainer>
            <StyledLink to={"/login"}>
              <Button
                children={"Log in"}
                width={"small"}
                login={true}
                border={true}
                height={"45px"}
              />
            </StyledLink>
          </ButtonContainer>
          </Nav>
           <div onClick={OpenMobileMenu}>
             click me
          </div> 
        </HeaderWrapper>
      </Container>
    </>
  );
};

export default NavBar;
