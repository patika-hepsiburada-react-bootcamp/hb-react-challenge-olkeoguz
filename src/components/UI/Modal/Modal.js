import React from 'react';
import Button from '../Button/Button';
import "./Modal.scss";

const Modal = ({ title, text }) => {
  return (
    <div className='modal'>
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='body'>{text}</div>
      <div className='footer'>
        <div className="footer-btns">
        <Button text='Evet' type="success" />
        <Button text='Hayır' type="reject" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
