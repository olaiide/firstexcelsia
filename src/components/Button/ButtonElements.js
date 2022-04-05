

import styled from "styled-components";
export const ButtonComponent = styled.button`
  width : ${(props => props.width === 'small' ? '140px' : '100%')};
  height : ${(props => props.height)};
  background-color : ${(props => props.login ? 'transparent' : '#EA7052' )};
  outline : none !important;
  cursor : pointer;
  border-radius : 7px;
  display : flex;
  justify-content : center;
  align-items : center;
  border : ${(props => props.border ? '01px solid #ea7052' : 'none')};
  color: #FFFFFF;
  font-family: Chalkboard SE;
  font-size: 17px;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: 0em;

  .spinner {
    width: 21.67px;
    height: 21.67px;
    border: 3px solid white;
    border-radius: 50%;
    border-top-color: rgba(252, 198, 26, 0.001);
    animation: loader 1s linear infinite;
  }
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
