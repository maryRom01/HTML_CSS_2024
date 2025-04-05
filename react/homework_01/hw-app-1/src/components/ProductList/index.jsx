import PropTypes from 'prop-types';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';

function ProductList({ data }) {
    return (
        <>
            <main>
                {data.map(({ name }, index) => (
                    <ProductCard key={index}>{name}</ProductCard>
                ))}
            </main>
        </>
    )
}

ProductList.PropTypes = {
  data: PropTypes.object
}

export default ProductList;