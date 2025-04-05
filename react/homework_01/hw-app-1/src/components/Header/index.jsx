import styles from './Header.module.scss';
import PropTypes from 'prop-types';

function Header({ children }) {
    return (
        <>
            <header>{children}</header>
        </>
    )
}

export default Header;