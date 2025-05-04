import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavoriteItem.module.scss';

const FavoriteItem = ({ id, title, price, image }) => {

    return (
        <div className={styles.favoriteItem}>
            <div className={styles.favoriteDetails}>
                <h3 className={styles.favoriteTitle}>{title}</h3>
                <p className={styles.favoriteTitle}>{price.toFixed(2)} грн</p>
                <img src={image} alt="title" width={80} />
            </div>
        </div>
    );
};

FavoriteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default FavoriteItem;