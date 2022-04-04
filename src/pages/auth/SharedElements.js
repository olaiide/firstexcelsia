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
    margin-top: 3rem;
    padding: 20px;
    position: relative;
  }
  .line1 {
    width: 495px;
    height: 400px;
    position: absolute;
    top: 100px;
    right: 0px;
    // right : 137px;
  }
  .line2 {
    width: 450px;
    height: 300px;
    position: absolute;
    top: 310px;
    right: 20px;
  }
  .line3 {
    width: 200px;
    height: 210px;
    position: absolute;
    top: 400px;
    right: 0;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  background-color: #e5e5e5;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form__container {
    width: 45%;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    height: 440px;
    border-radius: 10px;
    @media screen and (max-width : 1000px) {
       width : 90%;
       height : 350px;
    }
    h2 {
      text-align: center;
      margin-top: 3rem;
      font-size: 25px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
    }
  }
  .form__wrapper {
   // background: red;
    width: 82%;
    width : 300px;
  //  max-width : 700px;
    margin: 0 auto;
  }
  .input__ {
   // background-color : green;
  }
  .input__ input {
    width: 78%;
    outline: none;
    border-radius: 6px;
    border: none;
    background-color: #e5e5e5;
    margin-top: 15px;
    padding: 23px 33px;
    &::placeholder {
      font-family: Chalkboard SE;
      font-size: 15px;
      font-weight: 300;
    }
  }
  .button__container {
    margin-top: 2rem;
    width: 100%;
   // background-color: yellow;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
