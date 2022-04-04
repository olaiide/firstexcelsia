import React from "react";
import CardImage from "../../assets/Card.svg";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 230px;
 // width : 400px;
 // height : 330px;
  position: relative;
  .text {
    position: absolute;
    top: 145px;
    right: 25px;
    background: rgba(99, 98, 98, 0.5);
    padding: 25px 18px;
    text-overflow: ellipsis;
    width: 250px;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 7px;
    color: #fff;
    font-family: Chalkboard SE;
  }
`;
const Card = (props) => {
  return (
    <Container>
      <img
        src={CardImage}
        alt=''
        width='100%'
        height='100%'
        style={{ borderRadius: "13px" }}
      />
      <div className='text'>
        ejrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrnk
      </div>
    </Container>
  );
};

export default Card;
