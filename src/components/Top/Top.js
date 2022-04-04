import React, { useState } from "react";
import styled from 'styled-components';
import Close from "../../assets/Close.svg"
export const TopWrapper = styled.div`
  background-color: #ea7052;
  height: 100px;
  width: 100%;
  transition : all 2s;
  @media screen and (max-width : 764px) {
    //  display: none;
  }
`;
export const Top = styled.div`
  width: 85%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width : 764px){
    width : 100%;
    flex-direction : column;
  }
  .first__content {
      width : 100%;
      display : flex;
      justify-content : space-between;
      div {
        display : flex;
        justify-content : center;
        flex-direction : column;
      }
      span {
      color: white;
      font-family: Chalkboard SE;
      font-size: 15px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-decoration: underline solid white 1px;
      text-underline-offset: 5px;
      position : relative;
      right : 0rem;
      width : 500px;
      @media screen and (max-width : 764px){
        width : 170px;
        right : 0.8rem;
      }
    }
    p {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 6px 30px;
      color: white;
      border-radius: 6px;
      font-family: Chalkboard SE;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0em;
      @media screen and (max-width : 764px) {
      flex-direction : column;
      margin-left : 0.5rem;
    }
    }
    }
    @media screen and (max-width : 764px) {
      flex-direction : column;
      padding-top : 1rem;
    }
    .second__content {
      cursor : pointer;
      @media screen and (max-width : 764px){
        margin-right : 1rem;
      }
    }
`;
const Topp = () => {
  const [show, setShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const hideHandler = () => {
    setShow(false);
  };
  return (
    <div>
      {show && (
        <TopWrapper>
          <Top>
            <div className='first__content'>
              <div style={{ display: "flex" }}>
                <p>New!</p>
              </div>
              <div>
                <span>Announcing our $15 million series A funding!</span>
              </div>
              <div>
                <img
                  src={Close}
                  alt='close'
                  width='30px'
                  className='second__content'
                  onClick={hideHandler}
                />
              </div>
            </div>
          </Top>
        </TopWrapper>
      )}
    </div>
  );
};

export default Topp;
