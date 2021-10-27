import React from 'react';
import './Backdrop.scss';

const Backdrop = ({ visible, toggle }) => {
  return (
    <>
      {visible && (
        <div onClick={() => toggle(false)} className='backdrop'></div>
      )}
    </>
  );
};

export default Backdrop;
