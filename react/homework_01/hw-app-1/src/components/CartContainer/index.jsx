import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import styles from './CartContainer.module.scss';

const CartContainer = ({ cartItems = []}) => {
    console.log(Array.from(cartItems));

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.heading}>Your Cart</h2>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                    />
                ))
            ) : (
                <p className={styles.emptyCart}>Your cart is empty.</p>
            )}
        </div>
    );
};

CartContainer.propTypes = {
    cartItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CartContainer;
