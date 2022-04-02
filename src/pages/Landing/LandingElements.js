import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
export const WrapperOne = styled.div`
  background-color: #301446;
  overflow: hidden;
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
      font-size: 30px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
    }
    p {
      font-size: 20px;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0em;
    }
    span {
      color: #ea7052;
    }
  }
  .second__content {
    div{
        width : 370px;
    }
  }
`;

export const HeroTwo = styled.div``;
export const HeroThree = styled.div``;
