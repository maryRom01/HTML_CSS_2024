import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { openFirstModal } from '../../slices/modalSlice';

const CartItem = ({ id, title, price, image, count, setSelectedItem }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    setSelectedItem({ id, title, price, image });
    dispatch(openFirstModal());
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartDetails}>
        <h3 className={styles.cartTitle}>{title}</h3>
        <img src={image} alt="title" width={80} />
        <p>{Number(price).toFixed(2)}</p>
        <p>Quantity: {count}</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.remove} onClick={handleDeleteClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default CartItem;