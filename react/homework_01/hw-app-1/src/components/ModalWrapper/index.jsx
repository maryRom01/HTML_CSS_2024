import styles from './ModalWrapper.module.scss';
import React from 'react';
import ModalHeader from '../ModalHeader';
import PropTypes from 'prop-types';
import ModalBody from '../ModalBody';

function ModalWrapper({ type = 'text', children }) {
  const h2Element = React.Children.toArray(children).find(child => child.type === 'h2');
  const pElement = React.Children.toArray(children).find(child => child.type === 'p');

  return (
        <div className={`${styles["modal-content"]} ${styles[type]}`}>
          <ModalHeader>{h2Element}</ModalHeader> 
          <ModalBody>{pElement}</ModalBody>
        </div>
  );
}

ModalWrapper.PropTypes = {
  type: PropTypes.oneOf(['image', 'text']),
  children: PropTypes.node.isRequired
}
  
export default ModalWrapper