import styles from './ProductCard.module.scss';
import PropTypes from 'prop-types';

function ProductCard({ children }) {
    return (
        <>
            <div className={styles.card}>{ children }</div>
        </>
    )
}

export default ProductCard;