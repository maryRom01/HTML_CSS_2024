import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductList.module.scss';
import modalStyles from "../Modal/Modal.module.scss";
import Modal from '../Modal';

function ProductList({ data }) {
    const [isFirstModalOpen, setFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);
    const isModalOpen = isFirstModalOpen || isSecondModalOpen;

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
                {isModalOpen && (
                    <div className={modalStyles.modalbackdrop}>
                        <Modal 
                            type = "text" 
                            isOpen = {isSecondModalOpen}
                            onClose = {() => setSecondModalOpen(false)}
                            header = '' 
                            image2 = '/images/pills.png'
                            body = "The product added to the cart"
                            firstText = 'Ok' firstClick={() => console.log("Add to cart clicked")}
                        >
                        </Modal>
                    </div>
                )}
            </>
    )
}

ProductList.PropTypes = {
  data: PropTypes.object,
  setFirstModalOpen: PropTypes.func.isRequired,
  setSecondModalOpen: PropTypes.func.isRequired
}

export default ProductList;