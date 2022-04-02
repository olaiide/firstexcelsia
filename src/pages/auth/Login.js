import React from 'react'
import Logo from "../../assets/Logo.svg";
import {
  Container,
  Content,
  RightContent,
  LeftContent,
} from "./SharedElements";
import Button from "../../components/Button/Button";
import Line1 from "../../assets/Line.svg" ;
import Line2 from "../../assets/Line2.svg";
import Line3 from "../../assets/Line3.svg"
import Test from "../../assets/test.svg"
const Login = () => {
  return (
    <Container>
    <Content>
      <LeftContent>
        <div>
          <img src={Logo} alt='logo' />
        <img src={Line1} alt="" className="line1"/>
        <img src={Line2} alt="" className="line2" />
        <img src={Line3} alt="" className="line3"/>
       </div>
     
      </LeftContent>
      <RightContent>
        <div className='form__container'>
          <h2>Login</h2>
          <form>
            <div className='input__'>
              <input placeholder='Email' />
            </div>
            <div className='input__'>
              <input placeholder='Password' />
            </div>
            <div className='button__container'>
              <Button children='Login' height="60px" />
            </div>
          </form>
        </div>
      </RightContent>
    </Content>
  </Container>
  )
}

export default Login