import styles from './ModalHeader.module.scss';
import PropTypes from 'prop-types';

function ModalHeader({ children }) {
    return (
        <h2 className={styles.header}>{children}</h2>
    );
  }

ModalHeader.PropTypes = {
  children: PropTypes.node.isRequired
}
  
export default ModalHeader