import styles from './ModalWrapper.module.scss';
import React from 'react';
import ModalHeader from '../ModalHeader';
import PropTypes from 'prop-types';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

function ModalWrapper({ type = 'text', header = '', body = '', firstText='', secondText='', firstClick, secondClick, onClose, image='', image2 = '' }) {
  console.log(image);
  return (
    <>
       <div className={styles.background} onClick={() => setIsOpen(false)} />
       <div className={`${styles["modal-content"]} ${styles[type]}`}>
          {type === 'image' && (
            <ModalHeader onClose={onClose} image={image}>{header}</ModalHeader> 
          )}
          {type === 'text' && (
            <ModalHeader onClose={onClose} image2={image2}>{header}</ModalHeader> 
          )}
          <ModalBody>{body}</ModalBody>
          <ModalFooter firstText={`${firstText}`} secondText={`${secondText}`} firstClick={firstClick} secondClick={secondClick}></ModalFooter>
        </div>
    </>
        
  );
}

ModalWrapper.PropTypes = {
  type: PropTypes.oneOf(['image', 'text']),
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string
}
  
export default ModalWrapper