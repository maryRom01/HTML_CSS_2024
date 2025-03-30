import styles from './ModalWrapper.module.scss';
import React from 'react';
import ModalHeader from '../ModalHeader';
import PropTypes from 'prop-types';

function ModalWrapper({ type = 'text', children }) {
  const h2Element = React.Children.toArray(children).find(child => child.type === 'h2');

  return (
        <div className={`${styles["modal-content"]} ${styles[type]}`}>
          <ModalHeader>{h2Element}</ModalHeader> 
        </div>
  );
}

ModalWrapper.PropTypes = {
  type: PropTypes.oneOf(['image', 'text']),
  children: PropTypes.node.isRequired
}
  
export default ModalWrapper