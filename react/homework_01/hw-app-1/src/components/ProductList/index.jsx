import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ data, setSecondModalOpen, setCartCount, setFavoriteCount, updateCart, updateFavorite }) {

    return (
            <>
                <main className={styles.product_list}>
                    {data.map(({ id, name, price, image, producer, package: packageSize }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            image={image}
                            producer={producer}
                            packageSize={packageSize}
                            setSecondModalOpen={setSecondModalOpen}
                            setCartCount={setCartCount}
                            setFavoriteCount={setFavoriteCount}
                            updateCart={updateCart}
                            updateFavorite={updateFavorite}
                        />
                    ))}
                </main>
            </>
    )
}

ProductList.PropTypes = {
  data: PropTypes.object,
  setFirstModalOpen: PropTypes.func.isRequired,
  setSecondModalOpen: PropTypes.func.isRequired,
  setCartCount: PropTypes.func.isRequired,
  setFavoritesCount: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default ProductList;