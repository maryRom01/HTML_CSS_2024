import styles from './ModalHeader.module.scss';
import PropTypes from 'prop-types';

function ModalHeader({ onClose, children }) {
    return (
      <>
        <h2 className={styles.header}>{children}</h2>
        <button onClick={onClose}>Close</button>
      </>
    );
  }

ModalHeader.PropTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
  
export default ModalHeader