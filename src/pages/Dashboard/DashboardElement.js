import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  font-family : Chalkboard SE;
`;

export const Header = styled.div`
  background-color: #301446;
  overflow: hidden;
  .header__wrapper {
    width: 90%;
    max-width: 1100px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
  }
  .left__content {
    display : flex;
    justify-content : center;
    flex-direction : column;
  }
  .right__content {
   //  background-color : red;
      display : flex;
      flex-direction : column;
      justify-content : space-evenly;
    h3 {
      text-align: center;
      font-family: Chalkboard SE;
      font-size: 15px;
      font-weight: 700;

      letter-spacing: 0em;
      color: #fff;
    }
  }
`;
export const Wrapper = styled.div`
width : 90%;
max-width: 1100px;
margin: 0 auto;
//padding : 30px;
`
export const TopPost = styled.div`
padding : 30px;
 .top__ span{
     padding : 25px 30px;
font-size: 25px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
overflow : hidden;
 }
`
export const TopCard = styled.div`
 //padding-top : 4rem;
 background-color : red;
 //overflow : hidden;
 display : flex;
 overflow-x : scroll;
 height : 400px;
 height : 100%;
 width : 1000px;
 //width : fit-content;
 div{
     //height : 100%;
     overflow-y : hidden;
    // overflow-x : scroll;
 }
`
export const Trending = styled.div`
padding : 30px;
 .top__ span{
     padding : 25px 30px;
font-size: 25px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;

 }
`
export const TrendingWrapper = styled.div`
padding-top : 4rem;
display: grid;
//background : red;
 // justify-content: center;
  grid-template-columns: repeat(2, 0.1fr);
  grid-template-columns: repeat(auto-fit, minmax(280px, 0.6fr));
  grid-gap: 30px;
 // row-gap : 
 // justify-content : center;
`