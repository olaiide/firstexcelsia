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
  }
  .line2 {
    width: 450px;
    height: 300px;
    position: absolute;
    top: 310px;
    right: 0px;
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
  .form__wrapper {
    background: white;
    width: 95%;
    max-width: 400px;
    margin: 0 auto;
    height: 400px;
    border-radius: 7px;
    @media screen and (max-width : 764px){
      width : 90%;
      height : 460px;
    }
  }
  p{
    text-align : center;
    color : red;
  }
  .form__container {
    width: 93%;
    margin: 0 auto;

    border-radius: 10px;
    @media screen and (max-width: 1000px) {
      width: 90%;
    }
    h2 {
      text-align: center;
      margin-top: 5rem;
      font-size: 25px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0em;
    }

    input {
      border: 1px solid transparent;
      height: 60px;
      width: 96%;
      border-radius: 7px;
      background-color: #e5e5e5;
      outline: none;
      padding-left: 7px;
      margin-top: 20px;
      font-size : 15px;
      &::placeholder {
        font-family: Chalkboard SE;
        font-size: 17px;
        font-weight: 300;
        line-height: 20px;
        letter-spacing: 0em;
      }
    }
  }

  .button__container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
`;
