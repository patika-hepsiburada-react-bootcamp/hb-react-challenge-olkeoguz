import { useCart } from '../../../contexts/CartContext';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import './Modal.scss';

const Modal = ({ title, text }) => {
  const { modalOpen, setModalOpen, confirmRemoving } = useCart();
  return (
    <>
      {modalOpen && (
        <div className='modal'>
          <div className='title'>
            <p>{title}</p>
          </div>
          <div className='body'>{text}</div>
          <div className='footer'>
            <div className='footer-btns'>
              <Button
                text='Evet'
                type='success'
                click={() => confirmRemoving(true)}
              />
              <Button
                text='Hayır'
                type='reject'
                click={() => confirmRemoving(false)}
              />
            </div>
          </div>
        </div>
      )}
      <Backdrop visible={modalOpen} toggle={setModalOpen} />
    </>
  );
};

export default Modal;
