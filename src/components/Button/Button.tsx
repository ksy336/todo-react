import React from 'react';
import './Button.sass';
const Button = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      className={`button-products-submit ${props.disabled && 'disabled'}`}
    >
      {props.children}
    </button>
  );
};
export default Button;
