import styled from "styled-components";

export const Container = styled.footer`
  background: #301446;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
  color: white;
  .Logo__ {
    margin-top: 4rem;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-top: 2rem;
  }
  li {
    padding: 20px;
    font-family: Chalkboard SE;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    cursor: pointer;
  }
  p{
      text-align : center;
      font-family: Chalkboard SE;
font-size: 12px;
font-weight: 300;
line-height: 34px;
letter-spacing: 0em;

  }
`;
