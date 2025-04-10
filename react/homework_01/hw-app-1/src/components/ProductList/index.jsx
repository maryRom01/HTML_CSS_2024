import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ data, setFirstModalOpen, setSecondModalOpen }) {
    return (
            <>
                <main className={styles.product_list}>
                    {data.map(({ id, name, price, image, producer, package: packageSize }) => (
                        <ProductCard
                            key={id}
                            name={name}
                            price={price}
                            image={image}
                            producer={producer}
                            packageSize={packageSize}
                            setFirstModalOpen={setFirstModalOpen}
                            setSecondModalOpen={setSecondModalOpen}
                        />
                    ))}
                </main>
            </>
    )
}

ProductList.PropTypes = {
  data: PropTypes.object,
  setFirstModalOpen: PropTypes.func.isRequired,
  setSecondModalOpen: PropTypes.func.isRequired
}

export default ProductList;