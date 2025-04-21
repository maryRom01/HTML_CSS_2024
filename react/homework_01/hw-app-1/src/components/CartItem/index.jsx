import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

const CartItem = ({ id, name, price, image, count, setFirstModalOpen, setSelectedItem }) => {

    const handleDeleteClick = () => {
        setSelectedItem({ id, name, price, image }); 
        setFirstModalOpen(true);
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.cartDetails}>
                <h3 className={styles.cartTitle}>{name}</h3>
                <img src={image} alt="title" width={80} />
                <p>{Number(price).toFixed(2)}</p>
                <p>Quantity: {count}</p>
            </div>
            <div className={styles.actions}>
                <button className={styles.increment}>
                    +
                </button>
                <button className={styles.decrement}>
                    -
                </button>
                <button className={styles.remove} onClick={handleDeleteClick}>
                    Remove
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default CartItem;