import styles from './ModalWrapper.module.scss';
import PropTypes from 'prop-types';

function ModalWrapper({ type = 'text', children }) {
    return (
        <div className={`${styles["modal-content"]} ${styles[type]}`}>
          {children}
        </div>
    );
  }

ModalWrapper.PropTypes = {
  type: PropTypes.oneOf(['image', 'text']),
  children: PropTypes.node.isRequired
}
  
export default ModalWrapper