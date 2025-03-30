import styles from './ModalBody.module.scss';
import PropTypes from 'prop-types';

function ModalBody({ children }) {
    return (
        <p className={styles.body}>{children}</p>
    );
  }

ModalBody.PropTypes = {
  children: PropTypes.node.isRequired
}
  
export default ModalBody