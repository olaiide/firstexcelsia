import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import api from "../../api/api";
import axios from "axios";
import {
  Container,
  Content,
  RightContent,
  LeftContent,
} from "./SharedElements";
import Button from "../../components/Button/Button";
import Line1 from "../../assets/Line.svg";
import Line2 from "../../assets/Line2.svg";
import Line3 from "../../assets/Line3.svg";
import Test from "../../assets/test.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkFields, setCheckFields] = useState(false)
  let navigate = useNavigate();

  useEffect(() => {
    if (email.includes("@") && password.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
  //   setCheckFields(true)
    }
  }, [email, password]);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const proceed_to_login = async (e) => {
    if (!email.includes("@") && !password.length >= 8) {
      setCheckFields(true)
    }
    setLoading(true);
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    console.log(payload);
    const request = await api.create("/auth/login", payload);
    if (request.success) {
      setLoading(false);
      navigate("/dashboard", { replace: true });
    } else if (!request.success) {
      console.log("invalid credentials ");
      setLoading(false);
      setError(true);
      setErrorMsg(request.Error);
    } else {
      console.log("network issue");
      setError(true);
      setErrorMsg("An error occured, please try again later");
    }
    setLoading(false);
  };

  return (
    <Container>
      <Content>
        <LeftContent>
          <div>
            <img src={Logo} alt='logo' />
            <img src={Line1} alt='' className='line1' />
            <img src={Line2} alt='' className='line2' />
            <img src={Line3} alt='' className='line3' />
          </div>
        </LeftContent>
        <RightContent>
          <div className='form__container'>
            <h2>Login</h2>

            <div className='form__wrapper'>
              {error && <p>{errorMsg}</p>}
              {checkFields && <p>Please input all fields</p>}
              <form onSubmit={proceed_to_login}>
                <div className='input__'>
                  <input
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className='input__'>
                  <input
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className='button__container'>
                  <Button
                    children='Login'
                    height='60px'
                    loading={loading}
                    disabled={disabled}
                  />
                </div>
              </form>
            </div>
          </div>
        </RightContent>
      </Content>
    </Container>
  );
};

export default Login;
