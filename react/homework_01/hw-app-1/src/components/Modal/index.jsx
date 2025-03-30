import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

function Modal({ isOpen, onClose, type = 'text', children }) {
    if (!isOpen) return null; 
  
    return (
      <div className={styles["modal-backdrop"]} onClick={onClose}>
        <div className={`${styles["modal-content"]} ${styles[type]}`} onClick={(e) => e.stopPropagation()}>
          {children}
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['image', 'text']),
  children: PropTypes.node.isRequired
}
  
export default Modal