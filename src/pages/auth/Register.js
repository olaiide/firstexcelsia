import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import api from "../../api/api";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import {
  Container,
  Content,
  RightContent,
  LeftContent,
  FormContainer
} from "./SharedElements";
import Button from "../../components/Button/Button";
import Line1 from "../../assets/Line.svg";
import Line2 from "../../assets/Line2.svg";
import Line3 from "../../assets/Line3.svg";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const proceed_to_registration = async (e) => {
    setLoading(true);
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    const request = await api.create("/auth/register", payload);
    if (request.success) {
      setLoading(false);
      notify()
      setTimeout(() => navigate('/login'), 3000)
    } else if (!request.success) {
      setLoading(false);
      setError(true);
      setErrorMsg('User already exists. Please try another email.');
      setTimeout(() => setError(false), 3000)
    } else {
      console.log("network issue");
      setError(true);
      setErrorMsg("An error occured, please try again later");
    }
    setLoading(false);
  };

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut"
  });

  const notify = () => {
    toast.success('Registration successful, Proceeding to login page', {
      transition: bounce
    });
  }


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
          <ToastContainer transition={bounce} autoClose={2000}/>
          <div className='form__wrapper'>
            <form onSubmit={proceed_to_registration}>
            <h2 style={{ marginTop: "4rem", textAlign: "center" }}>Register</h2>
            {error && <p>{errorMsg}</p>}
            <FormContainer>
              <div className='form__container'>
                <div>
                  <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type='Password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    minLength='8'
                  />
                </div>
                <div className='button__container'>
                  <Button
                    loading={loading}
                    height={"65px"}
                    children={'Register'}
                  />
                </div>
              </div>
            </FormContainer>
            </form>
          </div>
      
        </RightContent>
      </Content>
    </Container>
  );
};

export default Register;
