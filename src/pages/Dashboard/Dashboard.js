import React, { useEffect } from "react";
import { Container, Header, TopPost, Wrapper, TopCard, Trending, TrendingWrapper } from "./DashboardElement";
import api from "../../api/api"
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Up from "../../assets/Up.svg"
const Dashboard = () => {

    useEffect(() => {
        getProducts()
    },[])

    const getProducts = async() => {
        const request = await api.get('/products')
        console.log(request.data)
    }
  return (
    <Container>
      <Header>
          <div className="header__wrapper">
        <div className="left__content">
          <img src={Logo} alt='' />
        </div>
        <div className="right__content">
          <h3>Hi email</h3>
         <div><Button width={"small"} children={'Log out'} height={'45px'}/></div>
        </div>
        </div>
      </Header>
      <Wrapper>
      <TopPost>
         <div className="top__"><img src={Up} alt="arrow up" width="25px" /><span>Top Post</span></div>
         <TopCard>
      <Card/>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      </TopCard>
      </TopPost>
      <Trending>
      <div className="top__"><img src={Up} alt="arrow up" width="25px" /><span>Trending</span></div>
      <TrendingWrapper>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </TrendingWrapper>
      </Trending>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
