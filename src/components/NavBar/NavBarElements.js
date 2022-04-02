import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  height: 120px;
  width: 100%;
  background-color:#301446;
`;

export const HeaderWrapper = styled.div`
  width: 90%;
  max-width: 1100px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const ButtonContainer = styled.div`
  width: 370px;
  display: flex;
  justify-content : space-around;
 // background-color : red !important;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
`;
export const LogoWrapper = styled.div`

`;

