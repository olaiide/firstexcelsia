import React from "react";
import Logo from "../../assets/Logo.svg";
import Button from "../Button/Button";
import {
  ButtonContainer,
  Container,
  HeaderWrapper,
  LogoWrapper,
  StyledLink,
} from "./NavBarElements";
const NavBar = () => {
  return (
    <Container>
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
  );
};

export default NavBar;
