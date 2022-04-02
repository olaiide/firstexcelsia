import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div`
  background-color: #301446;
  overflow: hidden;
  .header__wrapper {
    width: 90%;
    max-width: 1100px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
  }
  .left__content {
    display : flex;
    justify-content : center;
    flex-direction : column;
  }
  .right__content {
   //  background-color : red;
      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
    h3 {
      text-align: center;
      font-family: Chalkboard SE;
      font-size: 25px;
      font-weight: 700;

      letter-spacing: 0em;
      color: #fff;
    }
  }
`;
