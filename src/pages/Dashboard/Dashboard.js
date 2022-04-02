import React from "react";
import { Container, Header } from "./DashboardElement";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
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
    </Container>
  );
};

export default Dashboard;
