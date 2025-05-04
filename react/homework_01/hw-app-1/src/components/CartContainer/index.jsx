import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import styles from './CartContainer.module.scss';

const CartContainer = ({ 
    cartItems = [],
    setSelectedItem
}) => {
    const cartSum = cartItems.reduce((acc, el) => {
        acc = acc + el.count * el.price;
        return acc;
    }, 0);    

    const items = cartItems.reduce((acc, el) => {
        acc = acc + el.count;
        return acc;
    }, 0);

    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.heading}>Cart </h2>
            <div className={styles.contextContainer}>
                <div className={styles.context}>Sum: <span className={styles.text}></span></div>
                <div className={styles.context}>Quantity: <span className={styles.text}></span></div>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        count={item.count}
                        setSelectedItem={setSelectedItem}
                    />
                ))
            ) : (
                <p className={styles.emptyCart}>Cart is empty.</p>
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
