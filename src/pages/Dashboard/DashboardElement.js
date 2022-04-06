import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  font-family: Chalkboard SE;
`;

export const Header = styled.div`
  background-color: #301446;
  overflow: hidden;
  height : 130px;
  .header__wrapper {
    width: 90%;
    max-width: 1100px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width : 746px){
    }
  }
  .left__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    img {
      @media screen and (max-width: 764px) {
        width: 100px;
      }
    }
  }
  .right__content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
`;
export const TopPost = styled.div`
  padding: 30px;
  .top__ span {
    padding: 25px 30px;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
  }
`;
export const Trending = styled.div`
  padding: 30px;
  .top__ span {
    padding: 25px 30px;
    font-size: 25px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
  }
`;
export const TrendingWrapper = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 0.5fr));
  row-gap : 50px;
  @media screen and (max-width : 7868px) {
    justify-content : center;
  }
`;

export const Top = styled.div`
margin-top: 3rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.07fr 0.07fr 0.07fr 0.07fr;
  grid-column-gap: 60px;
  min-width: 120rem;
  @media screen and (max-width : 764px) {
    justify-content : center;
    column-gap : 20px;
    margin-left: -7rem;
  }
`;

export const ButtonContainer = styled.div`
width : 400px;
margin : 3rem auto;
@media screen and (max-width : 768px) {
   width : 100%;
}
`
