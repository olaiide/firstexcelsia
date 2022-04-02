import React from "react";
import { Container, Header, TopPost, Wrapper } from "./DashboardElement";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Up from "../../assets/Up.svg"
const Dashboard = () => {
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
         <div><img src={Up} alt="arrow up" width="20px" /><span>Top Post</span></div>
      <Card/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </TopPost>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
