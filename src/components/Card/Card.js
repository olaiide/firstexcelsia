import React from "react";
import CardImage from "../../assets/Card.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  .text {
    position: absolute;
    top: 210px;
    right: 60px;
    background: rgba(99, 98, 98, 0.5);
    padding: 20px 18px;
    text-overflow: ellipsis;
    width: 270px;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 7px;
    color: #fff;
    font-family: Chalkboard SE;
    @media screen and (max-width : 764px){
      width : 200px;
      right : 33px;
    }
  }
  @media screen and (max-width : 764px) {
  width : 300px;
   margin : 0 auto;
  }
`;
const Card = (props) => {
  return (
    <Container>
      <img
        src={props.src}
        alt=''
        width='100%'
        height='100%'
        style={{ borderRadius: "13px" }}
      />
      <div className='text'>
        {props.text}
      </div>
    </Container>
  );
};

export default Card;
