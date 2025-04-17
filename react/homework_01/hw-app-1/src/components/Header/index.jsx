import { NavLink, Link } from 'react-router';
import styles from './Header.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Header({ children='', cartCount, favoritesCount }) {
    return (
        <>
            <header className={styles.header}>
                <Link to='/'>
                    <div className={styles.iconWrapper}>
                        <img
                            src="/images/logo.svg"
                            alt="favourite"
                            className={styles.logo}
                        />
                    </div>
                </Link>
                <Link to='/'>
                    <h1>{ children }</h1>
                </Link>
                <div className={styles.icons}>
                    <NavLink to='favorite' className={({ isActive }) => classNames(styles.navItem, { [styles.active]: isActive })}>
                        <div className={styles.iconWrapper}>
                            <img
                                src="/images/star.svg"
                                alt="favourite"
                                className={styles.icon}
                            />
                            <span className={styles.counter}>{ favoritesCount }</span>
                        </div>
                    </NavLink>
                    <NavLink to='cart' className={({ isActive }) => classNames(styles.navItem, { [styles.active]: isActive })}>
                        <div className={styles.iconWrapper}>
                            <img
                                src="/images/shopcart.svg"
                                alt="cart"
                                className={styles.icon}
                            />
                            <span className={styles.counter}>{ cartCount }</span>
                        </div>
                    </NavLink>
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