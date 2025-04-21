import styles from './ProductCard.module.scss';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import { addToLocalStorage, removeItemFromLocalStorageFavorite } from '../../utils/localStorage';

function ProductCard({ id, name, price, image, producer, packageSize, setSecondModalOpen, setCartCount, setFavoriteCount, updateCart, favorite, updateFavorite }) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isFavorite = favorite.some(item => item.id === id);
        setLiked(isFavorite);
    }, [favorite, id]);

    const addItemToCart = (item) => {
        updateCart(draft => {
            const index = draft.findIndex(el => item.id === el.id);
            if (index === -1) {
                draft.push({...item, count: 1})
            } else {
                draft[index].count = draft[index].count + 1;
            }
        })
    }

    const addItemToFavorite = (item) => {
        updateFavorite(draft => {
            const index = draft.findIndex(el => item.id === el.id);
            if (index === -1) {
                draft.push({...item, count: 1})
            } else {
                draft[index].count = draft[index].count + 1;
            }
        })
    }

    const removeItemFromFavorite = (id) => {
            console.log(id);
            updateFavorite(draft => {
              const index = draft.findIndex(el => el.id === id);
        
              if (index !== -1) {
                draft.splice(index, 1)
              }
            })
            removeItemFromLocalStorageFavorite(id);
            const updatedFavorite = JSON.parse(localStorage.getItem('favorite')) || [];
            setFavoriteCount(updatedFavorite.length);
            addToLocalStorage('favoriteCount', updatedFavorite.length);
        }

    const handleLikeClick = () => {
        const isLiking = !liked;
        setLiked(isLiking); 
        setFavoriteCount(prev => prev + (liked ? -1 : 1));
        if (isLiking) {
            addItemToFavorite({ id, name, price, image });
        } else {
            removeItemFromFavorite(id);
        }
    };

    const handleAddToCartClick = () => {
        setSecondModalOpen(true); 
        setCartCount(prev => prev + 1);
        addItemToCart({ id, name, price, image });
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
    setFavoriteCount: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired
};

export default ProductCard;