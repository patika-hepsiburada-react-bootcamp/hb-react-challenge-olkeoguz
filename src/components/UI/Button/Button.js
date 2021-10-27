import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc, type, click, disabled }) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className={`btn-container ${iconSrc && 'with-icon'} ${
        type && type === 'secondary' && 'secondary'
      } ${type === 'danger' && 'danger'} ${type === 'success' && 'success'} ${
        type === 'reject' && 'reject'
      } `}
    >
      <span>{!disabled ? text : 'Bu ürünü sepete eklemeyemezsiniz'}</span>
      {iconSrc && <img src={iconSrc} alt='arrow-down' />}
    </button>
  );
};

export default Button;
