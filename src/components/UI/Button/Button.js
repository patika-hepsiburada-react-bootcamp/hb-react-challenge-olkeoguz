import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc, type, click }) => {
  return (
    <button
      onClick={click}
      className={`btn-container ${iconSrc && 'with-icon'} ${
        type && type === 'secondary' && 'secondary'
      }`}
    >
      <span>{text}</span>
      {iconSrc && <img src={iconSrc} alt='' />}
    </button>
  );
};

export default Button;
