import styles from './ProductCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToFavorite, removeFromFavorite } from '../../slices/favoriteSlice';
import { addToCart } from '../../slices/cartSlice';

function ProductCard({ id, title, price, image, isFirstModalOpen, setFirstModalOpen, setSecondModalOpen }) {
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.favorite.items); 
    
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isFavorite = favorite.some(item => item.id === id);
        setLiked(isFavorite);
    }, [favorite, id]);

    const addItemToCart = (product) => dispatch(addToCart(product));
    const addItemToFavorite = (product) => dispatch(addToFavorite(product));
    const removeItemFromFavorite = (productId) => dispatch(removeFromFavorite(productId));

    const handleLikeClick = () => {
        const isLiking = !liked;
        setLiked(isLiking);
        if (isLiking) {
            addItemToFavorite({ id, title, price, image });
        } else {
            removeItemFromFavorite(id);
        }
    };

    const handleAddToCartClick = () => {
        setSecondModalOpen(true); 
        addItemToCart({ id, title, price, image });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} />
                <button
                    className={`${styles.starBtn} ${liked ? styles.liked : ''}`} 
                    onClick={handleLikeClick}
                >
                    <FaStar />
                </button>
            </div>
            <h3 className={styles.name}>{title.length > 15 ? title.slice(0, 15) + '...' : title}</h3>
            <p><strong>Ціна:</strong> {price.toFixed(2)} грн</p>
            <Button className={styles.btn} type="default" onClick={handleAddToCartClick} classNames="first">
                Add to cart
            </Button>
        </div>
    );
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default ProductCard;