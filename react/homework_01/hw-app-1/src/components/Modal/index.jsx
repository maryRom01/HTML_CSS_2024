import styles from './Modal.module.scss';
import ModalWrapper from '../ModalWrapper';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, type = 'text', header = '', body = '', firstText='', secondText='', firstClick, secondClick, children, image, image2 }) {
    if (!isOpen) return null; 
  
    return (
      <div className={styles["modal-backdrop"]} onClick={onClose}>
        <ModalWrapper 
          type = {`${type}`} 
          header = {`${header}`} 
          body = {`${body}`} 
          onClick = {(e) => e.stopPropagation()} 
          firstText = {`${firstText}`} 
          secondText = {`${secondText}`} 
          firstClick = {firstClick} 
          secondClick = {secondClick} 
          image = {image}
          image2 = {image2}
        >
          {children}
        </ModalWrapper>
      </div>
    );
  }

Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['image', 'text']),
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string
}
  
export default Modal