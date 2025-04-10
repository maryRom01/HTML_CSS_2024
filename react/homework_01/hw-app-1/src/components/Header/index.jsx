import styles from './Header.module.scss';
import PropTypes from 'prop-types';

function Header({ children='', cartCount, favoritesCount }) {
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.logo}>{ children }</h1>
                <div className={styles.icons}>
                    <div className={styles.iconWrapper}>
                        <img
                            src="/images/star.svg"
                            alt="favourite"
                            className={styles.icon}
                        />
                        <span className={styles.counter}>{ favoritesCount }</span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <img
                            src="/images/shopcart.svg"
                            alt="cart"
                            className={styles.icon}
                        />
                        <span className={styles.counter}>{ cartCount }</span>
                    </div>
                </div>
                
                
            </header>
        </>
    )
}

Header.PropTypes = {
  children: PropTypes.node.isRequired,
  cartCount: PropTypes.number.isRequired,
  favoritesCount: PropTypes.number.isRequired,
}

export default Header;