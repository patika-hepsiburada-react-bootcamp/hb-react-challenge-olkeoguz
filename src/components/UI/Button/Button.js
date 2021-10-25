import React from 'react';
import "./Button.scss";

const Button = ({ text, iconSrc }) => {
  return (
    <button className={`btn-container ${iconSrc && 'with-icon'}`}>
        <span>{text}</span>
        {iconSrc && <img src={iconSrc} alt=''  />}
    </button>
  );
};

export default Button;
