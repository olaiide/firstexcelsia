import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  font-family: Chalkboard SE;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const WrapperOne = styled.div`
  background-color: #301446;
  overflow: hidden;
  height: 380px;
  @media screen and (max-width: 764px) {
    height: 100%;
  }
`;

export const HeroOne = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 764px) {
    width: 93%;
    flex-direction: column;
    text-align: center;
    margin-top: 0rem;
  }
  .first__content {
    color: white;
    font-family: Chalkboard;
    @media screen and (max-width: 764px) {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
    }
    span {
      color: #ea7052;
      text-decoration: underline solid white 3px;
      text-underline-offset: 7px;
    }
    .apps {
      display: flex;
      justify-content: center;
      width: 250px;
      @media screen and (max-width: 764px) {
        width: 400px;
        margin: 0 auto;
        margin-bottom: 2rem;
      }
    }
    .app__wrapper {
      display: flex;
    }
  }
  .second__content {
    div {
      width: 370px;
      @media screen and (max-width: 768px) {
        margin: 0 auto;
        width: 90%;
      }
    }
    img {
      border-bottom-left-radius: 10px !important ;
      border-top-left-radius : 0px !important;
    }
  }
`;

export const WrapperTwo = styled.div`
  background-color: #fff;
  overflow: hidden;
  height: 380px;
  @media screen and (max-width: 764px) {
    height: 100%;
  }
`;
export const HeroTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 90%;
  max-width: 1100px;
  @media screen and (max-width: 764px) {
    width: 93%;
    flex-direction: column;
  }
  .first__content {
    color: #000000;
    h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
    }
    span {
      color: #ea7052;
    }
  }
  .button__container {
    @media screen and (max-width: 768px) {
      width: 300px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
  }
  .second__content {
    div {
      width: 300px;
      height: 350px;
      @media screen and (max-width: 768px) {
        //  height : 100%;
        height: 500px;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
`;
export const WrapperThree = styled.div`
  background-color: #f4f4f4;
  overflow: hidden;
  height: 380px;
  @media screen and (max-width: 764px) {
    height: 100%;
  }
`;
export const HeroThree = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 90%;
  max-width: 1100px;
  @media screen and (max-width: 764px) {
    width: 93%;
    flex-direction: column;
  }
  .first__content {
    h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
    }
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
    .contact__ {
      @media screen and (max-width: 764px) {
        display: flex;
        flex-direction: column;
      }
    }
    .contact__ div {
      display: flex;
      @media screen and (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
      }
    }
    .contact__ p {
      margin: 10px;
    }
  }
  .second__content {
    div {
      width: 350px;
      @media screen and (max-width: 764px) {
        height: 100%;
        width: 90%;
      }
    }
  }
`;
