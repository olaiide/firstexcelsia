import React from 'react'
import CardImage from '../../assets/Card.svg';
import styled from 'styled-components';

const Container = styled.div`
  width : 200px;
  height : 300px;

  .image__container {
      position: relative;    
  }
  .text{
      position: absolute;
      top : 63px;
      right : 25px;
      background: rgba(99, 98, 98, 0.5);
    padding : 15px 13px;
      text-overflow : ellipsis;
  width : 130px;
  overflow : hidden;
  white-space: nowrap;
  //height : 40px;
      border-radius : 7px;
      color : #fff;
      font-family : Chalkboard SE;
  }
`
const Card = (props) => {

  return (
    <Container>
       <div className='image__container'>
           <img src={CardImage} alt="" width="100%" height="100%" style={{borderRadius : '5px'}}/>
           <div className='text'>Things you need to know to eat well ehjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</div>
       </div>
    </Container>
  )
}

export default Card