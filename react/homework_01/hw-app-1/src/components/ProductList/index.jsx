import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ products, favorite, isFirstModalOpen, setFirstModalOpen, setSecondModalOpen }) {

    return (
            <>
                <main className={styles.product_list}>
                    {products.map(({ id, title, price, image }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            image={image}
                            favorite={favorite}
                            isFirstModalOpen={isFirstModalOpen}
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
  setSecondModalOpen: PropTypes.func.isRequired,
  setCartCount: PropTypes.func.isRequired,
  setFavoritesCount: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}

export default ProductList;