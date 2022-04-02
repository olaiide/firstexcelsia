import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import {
  Container,
  WrapperOne,
  HeroOne,
  HeroTwo,
  HeroThree,
} from "./LandingElements";
import HeroOneImage from "../../assets/HeroOne.svg";
import Playstore from "../../assets/Playstore.svg";
import Appstore from "../../assets/Appstore.svg"
const Landing = () => {
  return (
    <Container>
      <NavBar />
      <WrapperOne>
        <HeroOne>
          <div className='first__content'>
            <h3>
              Our mission is to
              <br />
              <span>advance</span> humanity
            </h3>
            <p>
              We would strive to achieve that through <br />providing education and
              quality health
            </p>
            <div>
                <h3>DOWNLOAD APP</h3>
                <div><img /></div>
            </div>
          </div>
          <div className='second__content'>
            <div>
              <img src={HeroOneImage} alt='hero one svg' style={{width : '100%'}} />
            </div>
          </div>
        </HeroOne>
      </WrapperOne>
      <HeroTwo></HeroTwo>
      <HeroThree></HeroThree>
    </Container>
  );
};

export default Landing;
