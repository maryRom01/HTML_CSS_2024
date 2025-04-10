import styles from './ProductCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import PropTypes from 'prop-types';

function ProductCard({ name, price, image, producer, packageSize, setFirstModalOpen, setSecondModalOpen }) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked); 
    };

    const handleDeleteClick = () => {
        setFirstModalOpen(true); 
    };

    const handleAddToCartClick = () => {
        setSecondModalOpen(true); 
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={name} />
                    <button
                        className={`${styles.starBtn} ${liked ? styles.liked : ''}`} 
                        onClick={handleLikeClick}
                    >
                        <FaStar />
                    </button>
                </div>
                <h3 className={styles.name}>{name} №{packageSize}</h3>
                <p><strong>Ціна:</strong> {price.toFixed(2)} грн</p>
                <p className={styles.producer}>{producer}</p>
                <Button className={styles.btn} type="default" onClick={handleAddToCartClick} classNames="first">
                    Add to cart
                </Button>
            </div>
        </>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    packageSize: PropTypes.number.isRequired,
};

export default ProductCard;