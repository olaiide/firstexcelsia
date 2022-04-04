import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #301446;
  //background-color : red;
`;

export const TopWrapper = styled.div`
  background-color: #ea7052;
  height: 100px;
  width: 100%;
  transition : all 2s;
  @media screen and (max-width : 764px) {
      display: none;
  }
`;
export const Top = styled.div`

  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
  .first__content {
      width : 100%;
      display : flex;
      justify-content : space-between;
      div {
        display : flex;
        justify-content : center;
        flex-direction : column;
      }
      span {
      color: white;
      font-family: Chalkboard SE;
      font-size: 15px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-decoration: underline solid white 1px;
      text-underline-offset: 5px;
      position : relative;
      right : 0rem;
      width : 500px;
    }
    p {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 6px 30px;
      color: white;
      border-radius: 6px;
      font-family: Chalkboard SE;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0em;
    }
    }
    .second__content {
      cursor : pointer;
    }
`;
export const HeaderWrapper = styled.div`
  width: 90%;
 // background-color : red;
  max-width: 1100px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
 // position : absolute;
  /* z-index : 20;
  position : sticky;
   top : 0;  */
  @media screen and (max-width: 764px) {
    width : 100% !important;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonContainer = styled.li`
  // height : 100%;
  // background-color : red !important;

   @media (max-width: 768px) {
    /* flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 100px; */
    background-color : yellow;
  } 
`;
export const LogoWrapper = styled.div``;

export const Nav = styled.ul`
 background-color : green;
  width: 370px;
  display: flex;
  justify-content: space-between;
 
  list-style-type : none;
  @media screen and (max-width : 764px){
    left : ${(props ) => props.click ? '0' : '-150%'};
    background : red;
   // width : 100%;
    position : absolute;
    top : 80px;
    height : 100vh;
    flex-direction : column;
    margin : 0 auto;
  }
`
