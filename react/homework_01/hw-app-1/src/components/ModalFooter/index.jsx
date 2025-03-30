import styles from './ModalFooter.module.scss';
import PropTypes from 'prop-types';

function ModalFooter({ firstText = '', secondText = '', firstClick, secondClick }) {
    return (
      <div className={styles.footer}>
        {firstText && (
            <button className={`${styles.firstBtn} ${styles.footerBtn}`} onClick={firstClick}>{firstText}</button>
            
        )}
        {secondText && (
            <button className={`${styles.secondBtn} ${styles.footerBtn}`} onClick={secondClick}>{secondText}</button>
        )}
      </div>
    );
  }
  
  ModalFooter.propTypes = {
    firstText: PropTypes.string, 
    secondText: PropTypes.string, 
    firstClick: PropTypes.func, 
    secondClick: PropTypes.func 
  };
  
export default ModalFooter