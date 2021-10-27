import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc, type, click }) => {
  return (
    <button
      onClick={click}
      className={`btn-container ${iconSrc && 'with-icon'} ${
        type && type === 'secondary' && 'secondary'
      } ${type === 'danger' && 'danger'}`}
    >
      <span>{text}</span>
      {iconSrc && <img src={iconSrc} alt='arrow-down' />}
    </button>
  );
};

export default Button;
