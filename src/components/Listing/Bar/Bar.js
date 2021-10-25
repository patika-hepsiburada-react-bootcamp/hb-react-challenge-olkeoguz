import React from 'react';
import Button from '../../UI/Button/Button';
import ArrowDown from "../../../assets/icons/ArrowDown.svg";
import "./Bar.scss";

const Bar = () => {
  return (
    <div className="bar">
      <div className='searched-item-container'>
        <p className="title">iPhone iOS cep telefonu</p>
        <p className="searched-word">
          Aranan Kelime: <span>iphone 11</span>
        </p>
      </div>
      <div className="sorting">
          <Button text="Sıralama" iconSrc={ArrowDown}/>
      </div>
    </div>
  );
};

export default Bar;
