import React from "react";
import { ButtonComponent } from "./ButtonElements";
const Button = (props) => {
  return (
    <ButtonComponent
      width={props.width}
      login={props.login}
      border={props.border}
      height={props.height}
      loading={props.loading}
      disabled={props.disabled}
    >
       {props.loading ? <span className='spinner'></span> : props.children}
    </ButtonComponent>
  );
};

export default Button;
