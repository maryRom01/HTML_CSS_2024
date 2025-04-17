import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';

const CartItem = ({ id, name, image, setIsModalOpen = () => {}, setModalProps = () => {} }) => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartDetails}>
                <h3 className={styles.cartTitle}>{name}</h3>
                <img src={image} alt="title" width={50} />
                <p className={styles.cartCount}>Quantity: </p>
            </div>
            <div className={styles.actions}>
                <button className={styles.increment}>
                    +
                </button>
                <button className={styles.decrement}>
                    -
                </button>
                <button className={styles.remove} onClick={() => {
                
                }}>
                    Remove
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;