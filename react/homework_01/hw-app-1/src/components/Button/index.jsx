import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button({ children, onClick, type = 'default', classNames=''}) {

  return (
      <>
        <button onClick={onClick} className={`${styles.btn} ${styles[type]} ${classNames}`}>{children}</button>
      </>
    )
}

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'main']),
  classNames: PropTypes.string
}
  
export default Button