import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  font-family: Chalkboard SE;
`;
export const WrapperOne = styled.div`
  background-color: #301446;
  overflow: hidden;
  height: 380px;
`;

export const HeroOne = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  .first__content {
    color: white;
    font-family: Chalkboard;
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
    .apps {
      display: flex;
      // background-color: red;
      justify-content: center;
      width: 280px;
      h4 {
      }
    }
    .app__wrapper {
      margin: px;
    }
  }
  .second__content {
    div {
      width: 370px;
    }
  }
`;

export const WrapperTwo = styled.div`
  background-color: #fff;
  overflow: hidden;
  height: 380px;
`;
export const HeroTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 90%;
  max-width: 1300px;
  .first__content {
    color: #000000;
    h3 {
      font-size: 25px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
    }
    p{
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
    }
    span{
        color: #ea7052;
    }
  }
  .second__content{
      div {
          width : 300px;
          height : 350px;
      }
  }
`;
export const WrapperThree = styled.div`
  background-color: #f4f4f4;
  overflow: hidden;
  height: 380px;
`;
export const HeroThree = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  width: 90%;
  max-width: 1300px;
  .first__content {
   h3{
      font-size: 25px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
   }
   p{
      font-size: 16px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
   }
   .contact__ div{
       display : flex;
   }
   .contact__ p{
       margin : 10px;

   }
  }
  .second__content {
      div {
          width : 350px;
      }
  }
`;
