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
  TopWrapper,
  Top,
} from "./NavBarElements";
const NavBar = () => {
  const [show, setShow] = useState(true);
  const hideHandler = () => {
    setShow(false);
  };
  return (
    <>
      <Container>
        
        {show && (
          <TopWrapper>
            <Top>
              <div className='first__content'>
                <div style={{ display: "flex" }}>
                  <p>New!</p>
                </div>
                <div>
                  <span>Announcing our $15 million series A funding!</span>
                </div>
                <div>
                  <img
                    src={Close}
                    alt='close'
                    width='30px'
                    className='second__content'
                    onClick={hideHandler}
                  />
                </div>
              </div>
            </Top>
          </TopWrapper>
        )}
        <HeaderWrapper>
          <LogoWrapper>
            <img src={Logo} alt='Rodufy logo' />
          </LogoWrapper>
          <ButtonContainer>
            <StyledLink to={"/register"}>
              <Button children={"Register"} width={"small"} height={"45px"} />
            </StyledLink>
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
        </HeaderWrapper>
      </Container>
    </>
  );
};

export default NavBar;
