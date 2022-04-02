// export const LeftContent = styled.div`
// background-color : #e5e5e5;
// width : 70%;
// height : 100%;
// display : flex;
// justify-content : center;
// align-items : center;
//
// form {
//     display : flex;
//     flex-direction : column;
//     justify-content : space-between;
//     padding : 10px;
// }

// `

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: Chalkboard SE;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftContent = styled.div`
  background-color: #301446;
  width: 30%;
  div {
      margin-top :  3rem;
      padding : 20px;
      position : relative;
  }
  .line1{
      width : 495px;
      height : 400px;
      position : absolute;
      top : 100px;
      right : 0px;
     // right : 137px;
  }
  .line2{
    width : 450px;
    height : 300px;
    position : absolute;
    top : 310px;
    right : 20px;
  }
  .line3{
      width : 200px;
      height : 210px;
      position : absolute;
      top : 400px;
      right : 0;

  }
`;

export const RightContent = styled.div`
  background-color: #e5e5e5;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form__container {
    width : 45%;
    max-width : 500px;
    margin: 0 auto;
    background-color: #fff;
    height: 440px;
    border-radius: 10px;
    h2 {
      text-align: center;
      margin-top : 3rem;
      font-size: 25px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
    }
  }
  form {
    width: 300px;
    margin: 0 auto;
  }
.input__ {
    width : 233px;
}
  .input__ input {
  width: 100%;
    outline: none;
    border-radius: 6px;
    border: none;
   // height: 60px;
    background-color: #e5e5e5;
    margin-top: 15px;
    padding : 23px 33px;
    //padding-left : 10px;
    &::placeholder {
      font-family: Chalkboard SE;
   font-size: 15px;
      font-weight: 300;
      line-height: ;
      letter-spacing: 0em;
     // padding-left: 3px;
    }
  }
  .button__container {
    margin-top: 2rem;
  }
`;
