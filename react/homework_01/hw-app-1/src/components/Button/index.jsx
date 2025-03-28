import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick, type = 'default'}) {

    return (
      <>
        <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
      </>
    )
  }

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'main'])
}
  
export default Button