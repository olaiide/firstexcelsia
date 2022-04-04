import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Topp from "../../components/Top/Top";
import Button from "../../components/Button/Button";
import {
  Container,
  WrapperOne,
  HeroOne,
  HeroTwo,
  HeroThree,
  WrapperThree,
} from "./LandingElements";
import HeroOneImage from "../../assets/HeroOne.svg";
import HeroTwoImage from "../../assets/HeroTwo.svg";
import HeroThreeImage from "../../assets/HeroThree.svg";
import Playstore from "../../assets/Playstore.svg";
import Appstore from "../../assets/Appstore.svg";
import Whatsapp from "../../assets/Whatsapp.svg";
import Mail from "../../assets/Mail.svg";

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
              We would strive to achieve that through <br />
              providing education and quality health
            </p>
            <div className="apps">
              <h4>DOWNLOAD APP</h4>
              <div className="app__wrapper">
                <img src={Playstore} alt='playstore' width="80px" height="30px" />
                <img src={Appstore} alt='appstore' width="80px" height="30px" />
              </div>
            </div>
          </div>
          <div className='second__content'>
            <div>
              <img
                src={HeroOneImage}
                alt='hero one svg'
                width="100%"
              />
            </div>
          </div>
        </HeroOne>
      </WrapperOne>
      <HeroTwo>
          <div className="first__content">
            <h3>Everything you’ll <br />need to <span>excel</span> in life</h3>
            <p>We’ve curated a list of valuable resources<br />to get you going in life, all for free!</p>
            <div className="button__container">
            <Button children={'Get Started'} />
            </div>
          </div>
          <div className="second__content">
            <div><img src={HeroTwoImage} alt="second" width="100%" height="100%"/></div>
          </div>
      </HeroTwo>
      <WrapperThree>
      <HeroThree>
          <div className="first__content">
              <h3>Contact us</h3>
              <p>Got any questions, feedback, request and <br />
              complains? Reach out...</p>
              <div className="contact__">
                  <div><img src={Whatsapp}alt="whatsapp icon" width="30px"/><p>+2348232323892</p></div>
                  <div><img src={Mail} alt="mail icon" width="30px"/><p>contact@us.com</p></div>
              </div>
          </div>
          <div className="second__content">
              <div><img src={HeroThreeImage} alt="three" width="100%"/></div>
          </div>
      </HeroThree>
      </WrapperThree>
      <Footer />
    </Container>
  );
};

export default Landing;
