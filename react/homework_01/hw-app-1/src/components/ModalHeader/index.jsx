import styles from './ModalHeader.module.scss';
import PropTypes from 'prop-types';

function ModalHeader({ onClose, image, image2, children }) {
    return (
      <div className='header__container'>
        {image && (
          <img className={styles.headerImg} src={`${image}`} alt="Description of the image"></img>
        )}
        <button className={styles.btnClose} onClick={onClose}></button>
        <h2 className={styles.header}>{children}</h2>
        <div className={styles.pills}>
          <img src={`${image2}`} alt='pills'></img>
        </div>
        
      </div>
    );
  }

ModalHeader.PropTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.image,
  image2: PropTypes.image
}
  
export default ModalHeader