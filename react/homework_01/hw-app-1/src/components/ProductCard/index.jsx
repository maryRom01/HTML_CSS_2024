import styles from './ProductCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';

function ProductCard({ name, price, image, producer, packageSize, setFirstModalOpen, setSecondModalOpen, setCartCount, setFavoritesCount }) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked); 
        setFavoritesCount(prev => prev + (liked ? -1 : 1));
    };

    const handleDeleteClick = () => {
        setFirstModalOpen(true); 
    };

    const handleAddToCartClick = () => {
        setSecondModalOpen(true); 
        setCartCount(prev => prev + 1);
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
    setFirstModalOpen: PropTypes.func.isRequired,
    setSecondModalOpen: PropTypes.func.isRequired,
    setCartCount: PropTypes.func.isRequired,
    setFavoritesCount: PropTypes.func.isRequired
};

export default ProductCard;