import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavoriteContainer.module.scss';
import FavoriteItem from '../FavoriteItem';

const FavoriteContainer = ({ 
    favorite = []
}) => {

    return (
        <div className={styles.favoriteContainer}>
            <h2 className={styles.heading}>Favorite</h2>
            {favorite.length > 0 ? (
                favorite.map((item) => (
                    <FavoriteItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))
            ) : (
                <p className={styles.emptyFavorite}>No favorite items</p>
            )}
        </div>
    );
};

FavoriteContainer.propTypes = {
    favorite: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FavoriteContainer;
