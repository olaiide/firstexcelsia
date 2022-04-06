import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import './NavBar.css'
import Button from "../Button/Button";

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
const ButtonContainer = styled.div`
   @media (max-width: 768px) {
   margin : 0 auto;
  } 
`;


const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Fragment>
        <nav className={"navbar"}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="Logo"/>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <ButtonContainer>
              <StyledLink to={"/register"}>
                <Button children={"Register"} width={"small"} height={"45px"} />
              </StyledLink>
            </ButtonContainer>
            </li>
            <li className="nav-item">
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
            </li>
          
          </ul>
          <div
            className={click ? "menu_btn menu_btn_line" : "menu_btn menu_btn_open"}
            onClick={handleClick}
          >
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
