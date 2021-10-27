import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc, type, click, disabled }) => {
  console.log(disabled);
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`btn-container ${iconSrc && 'with-icon'} ${
        type && type === 'secondary' && 'secondary'
      } ${type === 'danger' && 'danger'}`}
    >
      <span>{!disabled ? text : 'Bu ürünü sepete eklemeyemezsiniz'}</span>
      {iconSrc && <img src={iconSrc} alt='arrow-down' />}
    </button>
  );
};

export default Button;
