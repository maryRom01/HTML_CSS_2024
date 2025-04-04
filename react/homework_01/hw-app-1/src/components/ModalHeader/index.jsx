import styles from './ModalHeader.module.scss';
import PropTypes from 'prop-types';

function ModalHeader({ onClose, image, children }) {
    return (
      <div className='header__container'>
        {image && (
          <img className={styles.headerImg} src={`${image}`} alt="Description of the image"></img>
        )}
        <button className={styles.btnClose} onClick={onClose}></button>
        <h2 className={styles.header}>{children}</h2>
      </div>
    );
  }

ModalHeader.PropTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.image
}
  
export default ModalHeader